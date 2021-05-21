<template>
  <div class="circle-chart">
    <div id="vis"></div>
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  data() {
    return {
      mockData: [
        {
          effectiveWaterStorageCapacity: {
            data: '20815.76',
            updateTime: '2021-05-20T10:00:00+08:00',
          },
          effectiveCapacity: {
            data: '33550.5',
            updateTime: '2021-05-19T00:00:00+08:00',
          },
          reservoirName: {
            data: '翡翠水庫',
            updateTime: '2021-05-19T00:00:00+08:00',
          },
          effectiveWaterStorageStoragePercentage: {
            data: '62.04%',
            updateTime: '2021-05-20T10:00:00+08:00',
          },
          groupId: {
            data: '2',
          },
          sizeId: {
            data: '1',
          },
          reservoirIdentifier: {
            Data: '10205',
          },
        },
        {
          effectiveWaterStorageCapacity: {
            data: '10900.76',
            updateTime: '2021-05-20T10:00:00+08:00',
          },
          effectiveCapacity: {
            data: '4050.5',
            updateTime: '2021-05-19T00:00:00+08:00',
          },
          reservoirName: {
            data: '石門水庫',
            updateTime: '2021-05-19T00:00:00+08:00',
          },
          effectiveWaterStorageStoragePercentage: {
            data: '32%',
            updateTime: '2021-05-20T10:00:00+08:00',
          },
          groupId: {
            data: '1',
          },
          sizeId: {
            data: '1',
          },
          reservoirIdentifier: {
            Data: '10201',
          },
        },
        {
          effectiveWaterStorageCapacity: {
            data: '815.76',
            updateTime: '2021-05-20T10:00:00+08:00',
          },
          effectiveCapacity: {
            data: '24240.5',
            updateTime: '2021-05-19T00:00:00+08:00',
          },
          reservoirName: {
            data: '永和山水庫',
            updateTime: '2021-05-19T00:00:00+08:00',
          },
          effectiveWaterStorageStoragePercentage: {
            data: '70.04%',
            updateTime: '2021-05-20T10:00:00+08:00',
          },
          groupId: {
            data: '1',
          },
          sizeId: {
            data: '2',
          },
          reservoirIdentifier: {
            Data: '10209',
          },
        },
        {
          effectiveWaterStorageCapacity: {
            data: '666.76',
            updateTime: '2021-05-20T10:00:00+08:00',
          },
          effectiveCapacity: {
            data: '450.5',
            updateTime: '2021-05-19T00:00:00+08:00',
          },
          reservoirName: {
            data: '寶山二號水庫',
            updateTime: '2021-05-19T00:00:00+08:00',
          },
          effectiveWaterStorageStoragePercentage: {
            data: '88%',
            updateTime: '2021-05-20T10:00:00+08:00',
          },
          groupId: {
            data: '3',
          },
          sizeId: {
            data: '3',
          },
          reservoirIdentifier: {
            Data: '10207',
          },
        },
      ],
    }
  },
  mounted() {
    function bubbleChart() {
      const width = 1000
      const height = 700

      const centre = { x: width / 2, y: height / 2 }

      const forceStrength = 0.03

      let svg = null
      let baseline = null
      let bubbles = null
      let percentage = null
      let title = null
      let amount = null

      let nodes = []

      function charge(d) {
        return Math.pow(d.radius, 2.0) * 0.01
      }

      const simulation = d3
        .forceSimulation()
        .force('charge', d3.forceManyBody().strength(charge))
        .force('x', d3.forceX().strength(forceStrength).x(centre.x))
        .force('y', d3.forceY().strength(forceStrength).y(centre.y))
        .force(
          'collision',
          d3.forceCollide().radius((d) => d.radius + 1)
        )

      simulation.stop()

      function createNodes(rawData) {
        const maxSize = d3.max(rawData, (d) => +d.effectiveCapacity.data)

        const radiusScale = d3.scaleSqrt().domain([0, maxSize]).range([60, 120])

        const myNodes = rawData.map((d) => ({
          ...d,
          radius: radiusScale(+d.effectiveCapacity.data),
          size: +d.effectiveWaterStorageCapacity.data,
          x: Math.random() * 900,
          y: Math.random() * 800,
        }))

        return myNodes
      }

      const chart = function chart(selector, rawData) {
        nodes = createNodes(rawData)

        svg = d3
          .select(selector)
          .append('svg')
          .attr('width', width)
          .attr('height', height)

        const elements = svg
          .selectAll('.bubble')
          .data(nodes, (d) => d.id)
          .enter()
          .append('g')

        baseline = elements
          .append('linear-gradient')
          .attr('x1', 0.5)
          .attr('y1', 1)
          .attr('x2', 0.5)
          .attr('y2', 0)

        baseline
          .append('stop')
          .attr('offset', '0%')
          .attr('stop-opacity', 1)
          .attr('stop-color', 'blue')
        baseline
          .append('stop')
          .attr('offset', '40%')
          .attr('stop-opacity', 1)
          .attr('stop-color', 'blue')
        baseline
          .append('stop')
          .attr('offset', '40%')
          .attr('stop-opacity', 0)
          .attr('stop-color', 'blue')
        baseline
          .append('stop')
          .attr('offset', '100%')
          .attr('stop-opacity', 0)
          .attr('stop-color', 'blue')

        bubbles = elements
          .append('circle')
          .classed('bubble', true)
          .attr('r', (d) => d.radius)
          .attr('fill', 'none')
          .attr('stroke', '#24c7bd')
          .attr('fill-opacity', 0.1)
          .attr('stroke-width', 2)

        percentage = elements
          .append('text')
          .attr('dy', -30)
          .style('text-anchor', 'middle')
          .style('font-size', 40)
          .style('font-weight', 700)
          .style('font-family', 'Noto Sans CJK TC')
          .attr('fill', '#24c7bd')
          .text((d) => d.effectiveWaterStorageStoragePercentage.data)

        title = elements
          .append('text')
          .attr('dy', 15)
          .style('text-anchor', 'middle')
          .style('font-size', 28)
          .style('font-weight', 700)
          .style('font-family', 'Noto Sans CJK TC')
          .attr('fill', '#24c7bd')
          .text((d) => d.reservoirName.data)

        amount = elements
          .append('text')
          .attr('dy', 50)
          .style('text-anchor', 'middle')
          .style('font-size', 12)
          .style('font-weight', 300)
          .style('font-family', 'Noto Sans CJK TC')
          .attr('fill', '#24c7bd')
          .text((d) => `${d.effectiveCapacity.data} 萬立方公尺`)

        simulation.nodes(nodes).on('tick', ticked).restart()
      }

      function ticked() {
        bubbles.attr('cx', (d) => d.x).attr('cy', (d) => d.y)
        percentage.attr('x', (d) => d.x).attr('y', (d) => d.y)
        title.attr('x', (d) => d.x).attr('y', (d) => d.y)
        amount.attr('x', (d) => d.x).attr('y', (d) => d.y)
      }

      return chart
    }

    const myBubbleChart = bubbleChart()

    myBubbleChart('#vis', this.mockData)
  },
}
</script>
