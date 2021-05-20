<template>
  <div class="chart-wrapper">
    <!-- <section class="graph-title">
      <div class="info">
        <span class="info-title">今日用電狀況</span>
        <span v-if="isNotEnough" class="info-status">
          供電吃緊
        </span>
        <span v-else class="info-status">供電正常</span>
      </div>
      <div class="label">
        <span class="consume">用電量</span>
        <span class="supply">發電量</span>
        <span class="yesterday-consume">昨日用電量</span>
      </div>
    </section> -->
    <svg ref="linechart" />
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  data() {
    return {
      mockData: {
        power: {
          power_24h: [
            {
              time: '2021-05-18 00:10',
              status: {
                發電: 34467.200000001,
                用電: 3447.4,
                昨日用電: 3999.4,
              },
            },
            {
              time: '2021-05-18 06:10',
              status: {
                發電: 32222,
                用電: 6711.4,
                昨日用電: 6868.4,
              },
            },
            {
              time: '2021-05-18 08:20',
              status: {
                發電: 31837.9,
                用電: 3184.4,
                昨日用電: 4000.4,
              },
            },
            {
              time: '2021-05-18 13:10',
              status: {
                發電: 35449.764,
                用電: 30545.6,
                昨日用電: 28700.4,
              },
            },
            {
              time: '2021-05-18 15:10',
              status: {
                發電: 30000.764,
                用電: 28545.6,
                昨日用電: 28678.4,
              },
            },
            {
              time: '2021-05-18 18:20',
              status: {
                發電: 36652.43599999,
                用電: 12665.9,
                昨日用電: 13333.4,
              },
            },
            {
              time: '2021-05-18 23:30',
              status: {
                發電: 36910.7099999,
                用電: 20691.7,
                昨日用電: 19800.4,
              },
            },
          ],
          last_year_peak: 3802.01,
          update_time: '2021-05-19',
        },
      },
    }
  },
  mounted() {
    const chartDomNode = this.$refs.linechart
    let width = 0
    let height = 0
    if (window.innerWidth < 768) {
      width = window.innerWidth * 0.85
      height = window.innerWidth * 0.68
    } else {
      width = 600
      height = 284
    }

    const margin = { top: 18, right: 25, bottom: 30, left: 89 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom
    const parseTime = d3.timeParse('%Y-%m-%d %H:%M')

    const x = d3.scaleTime().range([0, innerWidth])
    const y = d3.scaleLinear().range([innerHeight, 0])

    const valueLine = d3
      .line()
      .x((d) => x(d.time))
      .y((d) => y(d.status['發電']))
    const valueLine2 = d3
      .area()
      .x((d) => x(d.time))
      .y0(y(0))
      .y1((d) => y(d.status['用電']))
    const valueLine3 = d3
      .line()
      .x((d) => x(d.time))
      .y((d) => y(d.status['昨日用電']))

    const svg = d3
      .select(chartDomNode)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    const data = this.mockData.power.power_24h
    data.forEach((d) => {
      d.time = parseTime(d.time)
      d.status['發電'] = +d.status['發電']
      d.status['用電'] = +d.status['用電']
      d.status['昨日用電'] = +d.status['昨日用電']
    })

    x.domain(d3.extent(data, (d) => d.time))
    y.domain([
      0,
      d3.max(data, (d) =>
        Math.max(d.status['發電'], d.status['用電'], d.status['昨日用電'])
      ),
    ])

    svg
      .append('path')
      .data([data])
      .attr('fill', 'none')
      .attr('stroke', '#000928')
      .attr('stroke-width', 2)
      .attr('stroke-linecap', 'round')
      .attr('stroke-linejoin', 'round')
      .attr('d', valueLine)

    svg
      .append('path')
      .data([data])
      .attr('fill', 'none')
      .attr('stroke', '#000928')
      .attr('stroke-opacity', 0.1)
      .attr('stroke-width', 2)
      .attr('stroke-linecap', 'round')
      .attr('stroke-linejoin', 'round')
      .attr('d', valueLine3)

    svg
      .append('path')
      .data([data])
      .attr('fill', '#f9c408')
      .attr('fill-opacity', 0.1)
      .attr('stroke-width', 2)
      .attr('stroke-linecap', 'round')
      .attr('stroke-linejoin', 'round')
      .style('stroke', '#f9c408')
      .attr('d', valueLine2)

    svg
      .append('g')
      .attr('transform', `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(x).ticks(d3.timeHour.every(6)))
      .call((g) => g.selectAll('.tick line').attr('y2', 0))
      .call((g) => g.selectAll('.tick text').attr('font-size', 14))

    svg
      .append('g')
      .call(d3.axisLeft(y).ticks(5).tickSize(-width, 0))
      .call((g) =>
        g
          .selectAll('.tick:not(:first-of-type) line')
          .attr('stroke', '#000928')
          .attr('stroke-opacity', 0.1)
          .attr('transform', 'translate(-89, 0)')
      )
      .call((g) =>
        g
          .selectAll('.tick text')
          .attr('x', -50)
          .attr('dy', -10)
          .attr('font-size', 12)
          .attr('stroke', '#000928')
          .attr('opacity', 0.1)
      )
      .select('.domain')
      .remove()
  },
}
</script>

<style lang="scss" scoped>
.chart-wrapper {
  width: 100%;
  height: 100%;
  svg {
    margin: 0 auto;
  }
}
</style>
