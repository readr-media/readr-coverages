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
    <div class="linechart-label">單位：萬瓩</div>
    <svg ref="linechart"></svg>
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
  watch: {
    power() {
      const chartDomNode = this.$refs.linechart
      const width = 250
      const height = 200
      const margin = { top: 20, right: 15, bottom: 24, left: 38 }
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
        .call((g) => g.selectAll('.tick text').attr('font-size', 10))
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
            .attr('dy', -3)
            .attr('font-size', 8)
            .attr('fill', '#000928')
            .attr('opacity', 0.1)
            .attr('text-anchor', 'start')
        )
        .select('.domain')
        .remove()

      // svg
      //   .append('text')
      //   .text('單位：萬瓩')
      //   .attr('font-size', 12)
      //   .attr('fill', '#ccc')
      //   .attr('word-spacing', 2)
      //   .attr('x', innerWidth - 60) // 60為文字寬度
      //   .attr('y', margin.top - 4)

      svg
        .append('line')
        .attr('x1', -margin.left)
        .attr('x2', width)
        .attr('y1', height - margin.bottom - margin.top)
        .attr('y2', height - margin.bottom - margin.top)
        .attr('stroke', '#000928')
        .attr('stroke-width', 1)

      // 以下為 hover 動畫
      const focus = svg
        .append('g')
        .attr('class', 'focus')
        .style('display', 'none')

      const focus2 = svg
        .append('g')
        .attr('class', 'focus2')
        .attr('fill', '#fff')
        .attr('fill-opacity', 0.9)
        .style('display', 'none')

      focus2
        .append('rect')
        .attr('class', 'tooltip')
        .attr('x', 10)
        .attr('y', -150)
        .attr('width', 120)
        .attr('height', 60)
        .attr('rx', 1)
        .attr('ry', 1)
        .attr('stroke', '#000928')
        .attr('stroke-width', 1)
        .attr('stroke-opacity', 0.7)

      focus2
        .append('text')
        .attr('class', 'tooltip-time')
        .attr('fill', '#000928')
        .attr('opacity', 0.5)
        .attr('font-size', 10)

      focus2
        .append('text')
        .attr('class', 'tooltip-consume')
        .attr('fill', '#000928')
        .attr('font-size', 10)

      focus2
        .append('text')
        .attr('class', 'tooltip-supply')
        .attr('fill', '#000928')
        .attr('font-size', 10)

      focus2
        .append('text')
        .attr('class', 'yesterday-consume')
        .attr('fill', '#000928')
        .attr('font-size', 10)

      svg
        .append('rect')
        .attr('class', 'overlay')
        .attr('width', innerWidth)
        .attr('height', innerHeight)
        .on('mouseover', function () {
          focus.style('display', null)
          focus2.style('display', null)
        })
        .on('mouseout', function () {
          focus.style('display', 'none')
          focus2.style('display', 'none')
        })
        .on('mousemove', mousemove)

      const bisect = d3.bisector((d) => d.time).left

      function mousemove(event) {
        const x0 = d3.pointer(event)[0]
        const targetTime = x.invert(x0)
        const t = bisect(todayData, targetTime)
        const s = bisect(yesterdayData, targetTime)

        const eStatus = todayData[todayData.length - 1].status['供電狀況'] ?? ''
        const colorIndex =
          ['', '供電充裕。', '供電吃緊。', '供電警戒。', '限電警戒。'].indexOf(
            eStatus
          ) ?? 0
        const color = ['#ccc', '#24c7bd', '#f9c408', '#f97c08', '#e73e33']
        const colorStatus = color[colorIndex]

        const timeFormat = d3.timeFormat('%H:%M')
        const rectPos = { x: 10, y: -22 }
        if (x(yesterdayData[s].time) > 84) {
          rectPos.x = -125
          rectPos.y = 0
        }
        const text1Pos = { x: rectPos.x + 4, y: rectPos.y + 12 }
        const text2Pos = { x: rectPos.x + 4, y: rectPos.y + 26 }
        const text3Pos = { x: rectPos.x + 4, y: rectPos.y + 40 }
        const text4Pos = { x: rectPos.x + 4, y: rectPos.y + 54 }

        // focus2.select('rect').remove()

        focus2.attr(
          'transform',
          `translate(${x(yesterdayData[s].time)}, ${y(
            yesterdayData[s].status['用電']
          )})`
        )

        focus2.select('rect').attr('x', rectPos.x).attr('y', rectPos.y)

        focus.selectAll('circle').remove()
        focus2.selectAll('text').text('')

        focus2
          .select('.tooltip-time')
          .attr('x', text1Pos.x)
          .attr('y', text1Pos.y)
          .text(timeFormat(yesterdayData[s].time))

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
            .attr('fill', colorStatus)
            .attr('fill-opacity', 0.7)
          focus2
            .select('.tooltip-supply')
            .attr('x', text2Pos.x)
            .attr('y', text2Pos.y)
            .text(`最大供電量 ${todayData[t].status['最大供電']} 萬瓩`)
          focus2
            .select('.tooltip-consume')
            .attr('x', text3Pos.x)
            .attr('y', text3Pos.y)
            .text(`今日用電量 ${todayData[t].status['用電']} 萬瓩`)
        }

        if (yesterdayData[s]) {
          focus
            .append('circle')
            .attr('r', 3)
            .attr('cy', y(yesterdayData[s].status['用電']))
            .attr('cx', x(yesterdayData[s].time))
            .attr('fill', '#e0e0e0')
            .attr('fill-opacity', 0.7)
          if (todayData[t]) {
            focus2
              .select('.yesterday-consume')
              .attr('x', text4Pos.x)
              .attr('y', text4Pos.y)
              .text(`昨日用電量 ${yesterdayData[s].status['用電']} 萬瓩`)
          } else {
            focus2
              .select('.yesterday-consume')
              .attr('x', text2Pos.x)
              .attr('y', text2Pos.y)
              .text(`昨日用電量 ${yesterdayData[s].status['用電']} 萬瓩`)
          }
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.chart-wrapper {
  width: 100%;
  position: relative;
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
          width: 10px;
          height: 10px;
          @media (min-width: 344px) {
            width: 12px;
            height: 12px;
          }
        }
        p {
          margin-left: 2px;
          font-size: 10px;
          @media (min-width: 320px) {
            margin-left: 4px;
            font-size: 12px;
          }
          @media (min-width: 344px) {
            font-size: 14px;
            line-height: 30px;
          }
        }
        &.status {
          span {
            border-radius: 50%;
          }
        }
        &.consume {
          margin-left: 0;
          span {
            border-radius: 2px;
          }
        }
        &.supply {
          margin-left: 4px;
          @media (min-width: 344px) {
            margin-left: 12px;
          }
          span {
            border-radius: 2px;
            background-color: #000928;
          }
        }
        &.yesterday-consume {
          margin-left: 4px;
          @media (min-width: 344px) {
            margin-left: 12px;
          }
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
  .linechart-label {
    position: absolute;
    top: 66px;
    right: 0;
    font-size: 12px;
    color: #000928;
    opacity: 0.3;
    @media (min-width: 344px) {
      top: 80px;
    }
    @media (min-width: 768px) {
      top: 88px;
      font-size: 20px;
    }
    @media (min-width: 1200px) {
      top: 92px;
    }
  }
  svg {
    margin: 0 auto;
    position: relative;
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
