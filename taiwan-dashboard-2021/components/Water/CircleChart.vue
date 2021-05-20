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
      const width = 300
      const height = 700

      const centre = { x: width / 2, y: height / 2 }

      const forceStrength = 0.03

      let svg = null
      let bubbles = null
      let labels = null
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

      const fillColour = d3
        .scaleOrdinal()
        .domain(['1', '2', '3'])
        .range(['#24c7bd', '#f1a40e', '#e73e33'])

      const fillStroke = d3
        .scaleOrdinal()
        .domain(['1', '2', '3'])
        .range(['#24c7bd', '#f1a40e', '#e73e33'])

      function createNodes(rawData) {
        const radiusScale = d3
          .scaleOrdinal()
          .domain(['1', '2', '3'])
          .range([90, 60, 30])

        const myNodes = rawData.map((d) => ({
          ...d,
          radius: radiusScale(+d.sizeId.data),
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

        bubbles = elements
          .append('circle')
          .classed('bubble', true)
          .attr('r', (d) => d.radius)
          .attr('fill', (d) => fillColour(d.groupId.data))
          .attr('stroke', (d) => fillStroke(d.groupId.data))
          .attr('fill-opacity', 0.1)
          .attr('stroke-width', 2)

        labels = elements
          .append('text')
          .attr('dy', '.3em')
          .style('text-anchor', 'middle')
          .style('font-size', 10)
          .text((d) => d.reservoirName.data)

        simulation.nodes(nodes).on('tick', ticked).restart()
      }

      function ticked() {
        bubbles.attr('cx', (d) => d.x).attr('cy', (d) => d.y)

        labels.attr('x', (d) => d.x).attr('y', (d) => d.y)
      }

      return chart
    }

    const myBubbleChart = bubbleChart()

    myBubbleChart('#vis', this.mockData)
  },
}
</script>
