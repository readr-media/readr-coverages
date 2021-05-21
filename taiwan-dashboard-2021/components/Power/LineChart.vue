<template>
  <div class="chart-wrapper">
    <section class="graph-title">
      <div class="info">
        <span class="info-title">今日用電狀況</span>
        <span v-if="isEnough" class="info-status status">
          <span />
          <p>供電正常</p>
        </span>
        <span v-else class="info-status">
          <span />
          <p>供電吃緊</p>
        </span>
      </div>
      <div class="label">
        <span class="info-status consume">
          <span />
          <p>用電量</p>
        </span>
        <span class="info-status supply">
          <span />
          <p>發電量</p>
        </span>
        <span class="info-status yesterday-consume">
          <span />
          <p>昨日用電量</p>
        </span>
      </div>
    </section>
    <svg ref="linechart" />
  </div>
</template>

<script>
import * as d3 from 'd3'
// import _ from 'lodash'

export default {
  data() {
    return {
      isEnough: true,
      mockData: {
        yesterday: [
          {
            time: '00:50',
            用電: 22470.4,
          },
          {
            time: '03:10',
            用電: 20470.4,
          },
          {
            time: '07:10',
            用電: 24470.4,
          },
          {
            time: '09:10',
            用電: 19470.4,
          },
          {
            time: '11:10',
            用電: 22470.4,
          },
          {
            time: '15:10',
            用電: 28470.4,
          },
          {
            time: '17:10',
            用電: 29470.4,
          },
          {
            time: '19:10',
            用電: 22570.4,
          },
          {
            time: '21:10',
            用電: 29070.4,
          },
          {
            time: '23:10',
            用電: 19970.4,
          },
        ],
        today: [
          {
            time: '00:10',
            發電: 32222,
            用電: 29911.4,
          },
          {
            time: '02:10',
            發電: 34222,
            用電: 28001.4,
          },
          {
            time: '05:10',
            發電: 30022,
            用電: 20001.4,
          },
          {
            time: '08:20',
            發電: 31837.9,
            用電: 31840.4,
          },
          {
            time: '12:20',
            發電: 32537.9,
            用電: 31184.4,
          },
          {
            time: '15:20',
            發電: 37537.9,
            用電: 29184.4,
          },
          {
            time: '19:20',
            發電: 29537.9,
            用電: 25184.4,
          },
        ],
        last_year_peak: 3802.01,
        update_time: '2021-05-19',
      },
    }
  },
  mounted() {
    const chartDomNode = this.$refs.linechart
    const width = 272
    const height = 217
    const margin = { top: 0, right: 15, bottom: 24, left: 38 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom
    const parseTime = d3.timeParse('%H:%M')

    const xAxisTickInterval = window.innerWidth < 768 ? 12 : 6

    const x = d3.scaleTime().range([0, innerWidth])
    const y = d3.scaleLinear().range([innerHeight, 0])

    // const yesterdayGroup = _.groupBy(
    //   this.mockData.yesterday,
    //   (d) => d.time.split(':')[0]
    // )
    // const yesterdayClean = Object.entries(yesterdayGroup).map(function (
    //   hourData
    // ) {
    //   const hour = hourData[0]
    //   console.log(hour)
    //   const data = hourData[1]
    //   return {
    //     time: '00',
    //     用電: data.reduce((acc, curr) => acc + curr['用電'], 0) / data.length,
    //   }
    // })

    // const todayGroup = _.groupBy(
    //   this.mockData.today,
    //   (d) => d.time.split(':')[0]
    // )
    // const todayClean = Object.entries(todayGroup).map(function (hourData) {
    //   const hour = hourData[0]
    //   const data = hourData[1]
    //   return {
    //     time: `${hour}:00`,
    //     用電: data.reduce((acc, curr) => acc + curr['用電'], 0) / data.length,
    //     發電: data.reduce((acc, curr) => acc + curr['發電'], 0) / data.length,
    //   }
    // })

    // console.log(todayClean, yesterdayClean)

    const supplyLine = d3
      .line()
      .x((d) => x(d.time))
      .y((d) => y(d['發電']))
    const todayLine = d3
      .area()
      .x((d) => x(d.time))
      .y0(y(0))
      .y1((d) => y(d['用電']))
    const yesterdayLine = d3
      .line()
      .x((d) => x(d.time))
      .y((d) => y(d['用電']))
    const todayArea = d3
      .line()
      .x((d) => x(d.time))
      .y((d) => y(d['用電']))

    const svg = d3
      .select(chartDomNode)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    // const yesterdayData = [...yesterdayClean]
    // const todayData = [...todayClean]
    const yesterdayData = this.mockData.yesterday
    const todayData = this.mockData.today
    yesterdayData.forEach((d) => {
      d.time = parseTime(d.time)
      d['用電'] = +d['用電']
    })
    todayData.forEach((d) => {
      d.time = parseTime(d.time)
      d['發電'] = +d['發電']
      d['用電'] = +d['用電']
    })

    const yyMax = d3.max(yesterdayData, (d) => d['用電'])
    const ytMax = d3.max(todayData, (d) => Math.max(d['用電'], d['發電']))
    const yMax = d3.max([yyMax, ytMax]) + 10000
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
      .attr('stroke', '#f9c408')
      .attr('stroke-width', 2)
      .attr('stroke-linecap', 'round')
      .attr('stroke-linejoin', 'round')
      .attr('d', todayArea)

    svg
      .append('path')
      .data([todayData])
      .attr('fill', '#f9c408')
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
          .attr('stroke', '#000928')
          .attr('opacity', 0.1)
          .attr('text-anchor', 'start')
      )
      .select('.domain')
      .remove()

    svg
      .append('text')
      .text('單位：萬瓩')
      .attr('font-size', 12)
      .attr('stroke', '#ccc')
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
    // const focus = svg
    //   .append('g')
    //   .attr('class', 'focus')
    //   .style('display', 'none')

    // focus.append('circle').attr('r', 5)

    // focus
    //   .append('rect')
    //   .attr('class', 'tooltip')
    //   .attr('width', 100)
    //   .attr('height', 50)
    //   .attr('x', 10)
    //   .attr('y', 10)
    //   .attr('rx', 4)
    //   .attr('ry', 4)

    // focus
    //   .append('text')
    //   .attr('class', 'tooltip-date')
    //   .attr('x', 18)
    //   .attr('y', -2)

    // focus.append('text').attr('x', 18).attr('y', 18).text('Likes:')

    // focus
    //   .append('text')
    //   .attr('class', 'tooltip-likes')
    //   .attr('x', 60)
    //   .attr('y', 18)

    // svg
    //   .append('rect')
    //   .attr('class', 'overlay')
    //   .attr('width', width)
    //   .attr('height', height)
    //   .on('mouseover', function () {
    //     focus.style('display', null)
    //   })
    //   .on('mouseout', function () {
    //     focus.style('display', 'none')
    //   })
    //   .on('mousemove', mousemove)

    // const bisect = d3.bisector((d) => d.time).left

    // function mousemove() {
    //   const x0 = d3.pointer(event)[0]
    //   const targetTime = x.invert(x0)
    //   const t = bisect(todayData, targetTime)
    //   const s = bisect(yesterdayData, targetTime)
    //   focus.selectAll('circle').remove()
    //   focus
    //     .append('circle')
    //     .attr('r', 3)
    //     .attr('cy', y(todayData[t]['用電']))
    //     .attr('cx', x(todayData[t].time))
    //     .attr('fill', '#f9c408')
    //   focus
    //     .append('circle')
    //     .attr('r', 3)
    //     .attr('cy', y(todayData[t]['發電']))
    //     .attr('cx', x(todayData[t].time))
    //     .attr('fill', '#000928')
    //   focus
    //     .append('circle')
    //     .attr('r', 3)
    //     .attr('cy', y(yesterdayData[s]['用電']))
    //     .attr('cx', x(yesterdayData[s].time))
    //     .attr('fill', '#e0e0e0')
    // }
  },
}
</script>

<style lang="scss" scoped>
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
            background-color: #f9c408;
          }
        }
        &.consume {
          span {
            border-radius: 2px;
            background-color: #f9c408;
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

      .x.axis path {
        display: none;
      }

      .line {
        fill: none;
        stroke: steelblue;
        stroke-width: 1.5px;
      }

      .overlay {
        fill: none;
        pointer-events: all;
      }

      .focus text {
        font-size: 14px;
      }

      .tooltip {
        fill: white;
        stroke: #000;
      }

      .tooltip-date,
      .tooltip-likes {
        font-weight: bold;
      }
    }
  }
}
</style>
