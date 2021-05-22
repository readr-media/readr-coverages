<template>
  <div class="chart-wrapper">
    <section class="graph-title">
      <div class="info">
        <span class="info-title">今日用電狀況</span>
        <span class="info-status status">
          <span :style="{ background: currentElectricStatusColor }" />
          <p>{{ currentElectricLoading }}</p>
        </span>
      </div>
      <div class="label">
        <span class="info-status consume">
          <span :style="{ background: currentElectricStatusColor }" />
          <p>用電量</p>
        </span>
        <span class="info-status supply">
          <span />
          <p>最大供電量</p>
        </span>
        <span class="info-status yesterday-consume">
          <span />
          <p>昨日用電量</p>
        </span>
      </div>
    </section>
    <svg ref="linechart">
      <div
        v-show="shouldShowTooltip"
        class="chart-tooltip"
        :style="{
          top: `${tooltipY + 20}px`,
          left: `${tooltipX + 20}px`,
        }"
      >
        <p v-text="tooltipTime" />
        <p v-text="tooltipTodaySupply" />
        <p v-text="tooltipTodayConsume" />
        <p v-text="tooltipYesterdayConsume" />
      </div>
    </svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import responsive from '../../utils/d3-responsive'

export default {
  props: {
    power: {
      type: Object,
      isRequired: true,
      default: () => {
        return {}
      },
    },
    currentElectricLoading: {
      type: String,
      isRequired: true,
      default: '供電充裕',
    },
    currentElectricStatusColor: {
      type: String,
      isRequired: true,
      default: '#24c7bd',
    },
  },
  data() {
    return {
      shouldShowTooltip: true,
      tooltipX: 0,
      tooltipY: 0,
      tooltipTime: '',
      tooltipTodaySupply: '',
      tooltipTodayConsume: '',
      tooltipYesterdayConsume: '',
    }
  },
  watch: {
    power() {
      const chartDomNode = this.$refs.linechart
      const width = 272
      const height = 217
      const margin = { top: 0, right: 15, bottom: 24, left: 38 }
      const innerWidth = width - margin.left - margin.right
      const innerHeight = height - margin.top - margin.bottom
      const parseTime = d3.timeParse('%H:%M')

      const fillColour = d3
        .scaleOrdinal()
        .domain(['供電充裕', '供電吃緊', '供電警戒', '限電警戒'])
        .range(['#24c7bd', '#f9c408', '#f97c08', '#e73e33'])

      const xAxisTickInterval = window.innerWidth < 768 ? 12 : 6

      const x = d3.scaleTime().range([0, innerWidth])
      const y = d3.scaleLinear().range([innerHeight, 0])

      const supplyLine = d3
        .line()
        .x((d) => x(d.time))
        .y((d) => y(d.status['最大供電']))
      const todayLine = d3
        .area()
        .x((d) => x(d.time))
        .y0(y(0))
        .y1((d) => y(d.status['用電']))
      const yesterdayLine = d3
        .line()
        .x((d) => x(d.time))
        .y((d) => y(d.status['用電']))
      const todayArea = d3
        .line()
        .x((d) => x(d.time))
        .y((d) => y(d.status['用電']))

      const svg = d3
        .select(chartDomNode)
        .call(responsive, { width, height })
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

      const yesterdayData = this.power.power_24h_yesterday
      const todayData = this.power?.power_24h_today
      yesterdayData.forEach((d) => {
        d.time = parseTime(d.time?.split(' ')[1])
        d.status['用電'] = +d.status['用電']
      })
      todayData.forEach((d) => {
        d.time = parseTime(d.time?.split(' ')[1])
        d.status['最大供電'] = +d.status['最大供電']
        d.status['用電'] = +d.status['用電']
      })

      const yyMax = d3.max(yesterdayData, (d) => d.status['用電'])
      const ytMax = d3.max(todayData, (d) =>
        Math.max(d.status['用電'], d.status['最大供電'])
      )
      const yMax = d3.max([yyMax, ytMax]) + 1000
      const timeData = d3
        .extent(yesterdayData, (d) => d.time)
        .concat(d3.extent(todayData, (d) => d.time))
      x.domain(d3.extent(timeData, (d) => d)).nice()
      y.domain([0, yMax])

      svg
        .append('path')
        .data([todayData])
        .attr('fill', 'none')
        .attr('stroke', '#000928')
        .attr('stroke-width', 2)
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')
        .attr('d', supplyLine)

      svg
        .append('path')
        .data([yesterdayData])
        .attr('fill', 'none')
        .attr('stroke', '#000928')
        .attr('stroke-opacity', 0.1)
        .attr('stroke-width', 2)
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')
        .attr('d', yesterdayLine)

      svg
        .append('path')
        .data([todayData])
        .attr('fill', 'none')
        .attr('stroke', fillColour(this.currentElectricLoading))
        .attr('stroke-width', 2)
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')
        .attr('d', todayArea)

      svg
        .append('path')
        .data([todayData])
        .attr('fill', fillColour(this.currentElectricLoading))
        .attr('opacity', 0.1)
        .attr('d', todayLine)

      svg
        .append('g')
        .attr('transform', `translate(0, ${innerHeight})`)
        .call(
          d3
            .axisBottom(x)
            .ticks(d3.timeHour.every(xAxisTickInterval))
            .tickFormat((d, i) => `${i * xAxisTickInterval}時`)
        )
        .call((g) => g.selectAll('.tick line').attr('y2', 0))
        .call((g) => g.selectAll('.tick text').attr('font-size', 14))
        .select('.domain')
        .remove()

      svg
        .append('g')
        .call(d3.axisLeft(y).ticks(5).tickSize(-width, 0))
        .call((g) =>
          g
            .selectAll('.tick:not(:first-of-type) line')
            .attr('stroke', '#000928')
            .attr('stroke-opacity', 0.1)
            .attr('x1', -margin.left)
            .attr('x2', width)
        )
        .call((g) =>
          g
            .selectAll('.tick text')
            .attr('x', -margin.left)
            .attr('dy', -5)
            .attr('font-size', 12)
            .attr('fill', '#000928')
            .attr('opacity', 0.1)
            .attr('text-anchor', 'start')
        )
        .select('.domain')
        .remove()

      svg
        .append('text')
        .text('單位：萬瓩')
        .attr('font-size', 12)
        .attr('fill', '#ccc')
        .attr('word-spacing', 2)
        .attr('x', innerWidth - 60) // 60為文字寬度
        .attr('y', 22)

      svg
        .append('line')
        .attr('x1', -margin.left)
        .attr('x2', width)
        .attr('y1', height - margin.bottom)
        .attr('y2', height - margin.bottom)
        .attr('stroke', '#000928')
        .attr('stroke-width', 1)

      // 以下為 hover 動畫
      const focus = svg.append('g').attr('class', 'focus')

      svg
        .append('rect')
        .attr('class', 'overlay')
        .attr('width', innerWidth)
        .attr('height', innerHeight)
        .on('mouseover', function () {
          this.shouldShowTooltip = true
        })
        .on('mouseout', function () {
          this.shouldShowTooltip = false
          this.tooltipTime = ''
          this.tooltipTodaySupply = ''
          this.tooltipTodayConsume = ''
          this.tooltipYesterdayConsume = ''
        })
        .on('mousemove', mousemove)

      const bisect = d3.bisector((d) => d.time).left

      function mousemove(event) {
        this.tooltipX = event.clientX
        this.tooltipY = event.clientY
        const x0 = d3.pointer(event)[0]
        const targetTime = x.invert(x0)
        const t = bisect(todayData, targetTime)
        const s = bisect(yesterdayData, targetTime)
        focus.selectAll('circle').remove()
        if (yesterdayData[s]) {
          focus
            .append('circle')
            .attr('r', 3)
            .attr('cy', y(yesterdayData[s].status['用電']))
            .attr('cx', x(yesterdayData[s].time))
            .attr('fill', '#e0e0e0')
            .attr('fill-opacity', 0.7)
          this.tooltipTime = `${s}時`
          this.tooltipYesterdayConsume = `昨日用電量${yesterdayData[s].status['用電']}萬瓩`
        }
        if (todayData[t]) {
          focus
            .append('circle')
            .attr('r', 3)
            .attr('cy', y(todayData[t].status['最大供電']))
            .attr('cx', x(todayData[t].time))
            .attr('fill', '#000928')
            .attr('fill-opacity', 0.7)
          focus
            .append('circle')
            .attr('r', 3)
            .attr('cy', y(todayData[t].status['用電']))
            .attr('cx', x(todayData[t].time))
            .attr('fill', fillColour(this.currentElectricLoading))
            .attr('fill-opacity', 0.7)
          this.tooltipTodaySupply = `今日發電量${todayData[t].status['最大供電']}萬瓩`
          this.tooltipTodayConsume = `今日用電量${todayData[t].status['用電']}萬瓩`
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.chart-tooltip {
  position: fixed;
  z-index: 100;
  width: 121px;
  min-height: 56px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.chart-tooltip h1 {
  font-size: 16px;
  line-height: 24px;
  color: #000;
  opacity: 0.5;
  margin: 0;
  font-weight: 400;
}

.chart-tooltip p {
  font-size: 16px;
  line-height: 24px;
  color: #000;
  margin: 0;
  font-weight: 400;
}
.chart-wrapper {
  width: 100%;
  .graph-title {
    margin-bottom: 8px;
    @media (min-width: 768px) {
      margin-bottom: 4px;
    }
    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      @media (min-width: 768px) {
        margin-bottom: 12px;
      }
      &-title {
        font-size: 18px;
        line-height: 27px;
        font-weight: 300;
      }
      &-status {
        display: flex;
        align-items: center;
        margin-left: 10px;
        span {
          display: block;
          width: 12px;
          height: 12px;
        }
        p {
          margin-left: 4px;
          font-size: 14px;
          line-height: 30px;
        }
        &.status {
          span {
            border-radius: 50%;
          }
        }
        &.consume {
          span {
            border-radius: 2px;
          }
        }
        &.supply {
          margin-left: 12px;
          span {
            border-radius: 2px;
            background-color: #000928;
          }
        }
        &.yesterday-consume {
          margin-left: 12px;
          span {
            border-radius: 2px;
            background-color: #000928;
            opacity: 0.1;
          }
        }
      }
    }
    .label {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  svg {
    margin: 0 auto;
    &::v-deep {
      .axis path,
      .axis line {
        fill: none;
        stroke: #000;
        shape-rendering: crispEdges;
      }

      .overlay {
        fill: none;
        pointer-events: all;
      }
    }
  }
}
</style>
