<template>
  <svg ref="chart" />
</template>

<script>
import * as d3 from 'd3'
import _ from 'lodash'
import responsive from '../utils/d3-responsive'

export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    height: {
      type: Number,
      default: 540,
    },
  },
  data() {
    return {
      chart: undefined,
      windowWidth: undefined,
    }
  },
  watch: {
    data() {
      this.drawChart()
    },
  },
  mounted() {
    this.drawChart()

    window.addEventListener(
      'resize',
      _.debounce(() => {
        if (window.innerWidth !== this.windowWidth) {
          this.drawChart()
        }
      }, 250)
    )
  },
  methods: {
    drawChart() {
      this.windowWidth = window.innerWidth
      this.chart?.selectAll('svg g')?.remove()

      const chartDomNode = this.$refs.chart

      const width = Math.min(940, window.innerWidth)
      const height = this.height * (window.innerWidth <= 768 ? 1.5 : 1)
      // location to centre the bubbles
      const centre = { x: width / 2, y: height / 2 }
      const forceStrength = 0.03

      function charge(d) {
        return Math.pow(d.radius, 2.0) * 0.01
      }

      let simulation
      if (window.innerWidth <= 768) {
        simulation = d3
          .forceSimulation()
          .force('charge', d3.forceManyBody().strength(800))
          .force('center', d3.forceCenter(centre.x, centre.y))
          .force(
            'x',
            d3
              .forceX()
              .strength(forceStrength * 20)
              .x(centre.x)
          )
          .force(
            'y',
            d3
              .forceY()
              .strength(forceStrength * 1.5)
              .y(centre.y)
          )
          .force(
            'collision',
            d3.forceCollide().radius((d) => d.radius + 10)
            // .strength(9)
          )
      } else {
        simulation = d3
          .forceSimulation()
          .force('charge', d3.forceManyBody().strength(charge))
          .force('center', d3.forceCenter(centre.x, centre.y))
          .force('x', d3.forceX().strength(forceStrength).x(centre.x))
          .force(
            'y',
            d3
              .forceY()
              .strength(forceStrength * 2)
              .y(centre.y)
          )
          .force(
            'collision',
            d3.forceCollide().radius((d) => d.radius + 10)
          )
      }

      // this.chart = d3.select(chartDomNode).call(responsive, { width, height })

      // const maxSize = d3.max(this.data, (d) => +d.size)
      // const radiusScale = d3.scaleSqrt().domain([0, maxSize]).range([0, 80])

      const nodes = createNodes(this.data)

      // // create svg element inside provided selector
      // svg = d3
      //   .select(selector)
      //   .append('svg')
      //   .attr('width', width)
      //   .attr('height', height)

      const svg = (this.chart = d3
        .select(chartDomNode)
        .call(responsive, { width, height }))

      // bind nodes data to circle elements
      const elements = svg
        .selectAll('.bubble')
        .data(nodes, (d) => d.id)
        .enter()
        .append('g')

      const bubbles = elements
        .append('circle')
        .classed('bubble', true)
        .attr('r', (d) => d.radius)
        // .attr('fill', 'rgba(36, 199, 189, 0.1)')
        .attr('fill', (d) => `url(#${d.nameArea}-${d.nameReservoir}-fill)`)
        .style('stroke', '#24C7BD')
        .style('stroke-width', '1px')

      const bubblesLinearGradient = elements
        .append('linearGradient')
        .attr('id', (d) => `${d.nameArea}-${d.nameReservoir}-fill`)
        .attr('x1', '0.5')
        .attr('y1', '1')
        .attr('x2', '0.5')
        .attr('y2', '0')
      bubblesLinearGradient
        .append('stop')
        .attr('offset', '0%')
        .attr('stop-opacity', '1')
        .attr('stop-color', 'rgba(36, 199, 189, 0.1)')
      bubblesLinearGradient
        .append('stop')
        .attr('offset', (d) => `${d.percentage}%`)
        .attr('stop-opacity', '1')
        .attr('stop-color', 'rgba(36, 199, 189, 0.1)')
      bubblesLinearGradient
        .append('stop')
        .attr('offset', (d) => `${d.percentage + 0.25}%`)
        .attr('stop-opacity', '1')
        .attr('stop-color', '#24C7BD')
      bubblesLinearGradient
        .append('stop')
        .attr('offset', (d) => `${d.percentage + 0.5}%`)
        .attr('stop-opacity', '1')
        .attr('stop-color', '#24C7BD')
      bubblesLinearGradient
        .append('stop')
        .attr('offset', (d) => `${d.percentage + 0.75}%`)
        .attr('stop-opacity', '0')
        .attr('stop-color', 'rgba(36, 199, 189, 0.1)')
      bubblesLinearGradient
        .append('stop')
        .attr('offset', '100%')
        .attr('stop-opacity', '0')
        .attr('stop-color', 'rgba(36, 199, 189, 0.1)')

      // labels
      const labels = elements
        .append('text')
        // .attr('dy', '-3em')
        .style('text-anchor', 'middle')

      labels
        .append('tspan')
        .style('font-size', (d) => `${d.fontSize}px`)
        .style('font-weight', 'bold')
        .style('fill', '#24C7BD')
        .text((d) => `${d.percentage}%`)
      labels
        .append('tspan')
        .attr('dy', (d) => d.fontSize + 2)
        .style('text-anchor', 'middle')
        .style('font-size', (d) => `${d.fontSize * 0.875}px`)
        .style('font-weight', 'bold')
        .style('fill', '#24C7BD')
        .text((d) => d.nameReservoir)
      labels
        .append('tspan')
        .attr('dy', (d) => d.fontSize + 2 + d.fontSize * 0.875 + 2)
        .style('text-anchor', 'middle')
        .style('font-size', '12px')
        .style('font-weight', 'normal')
        .style('fill', '#24C7BD')
        .text((d) => (d.isSupportReservoir ? '支援' : ''))
      labels
        .append('tspan')
        .attr(
          'dy',
          (d) =>
            d.fontSize +
            2 +
            d.fontSize * 0.875 +
            2 +
            (d.isSupportReservoir ? 16 : 0)
        )
        .style('text-anchor', 'middle')
        .style('font-size', '12px')
        .style('font-weight', 'normal')
        .style('fill', '#24C7BD')
        .text((d) => `${d.size}萬立方公尺`)

      // area labels
      const labelsArea = elements.append('g')

      let labelsAreaText = labelsArea
        .append('text')
        // .attr('dy', '-3em')
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('line-height', '20.72px')
        .style('fill', 'transparent')
        .style('pointer-events', 'none')
        .text((d) => d.nameArea)
      let labelsAreaText2 = labelsArea
        .append('text')
        // .attr('dy', '-3em')
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('line-height', '20.72px')
        .style('fill', 'transparent')
        .style('pointer-events', 'none')
        .text((d) => d.additionalTag)
      const labelsAreaTextBBox = labelsArea
        .append('rect')
        .attr('width', (d, i, n) => {
          const textDOMArray = n[i].parentElement.querySelectorAll('text')
          const hasAdditionalTag = d.additionalTag?.length > 0
          const maxWidth = hasAdditionalTag
            ? textDOMArray[1].getBBox()?.width
            : textDOMArray[0].getBBox()?.width

          return maxWidth + 16
        })
        .attr('height', (d, i, n) => {
          const hasAdditionalTag = d.additionalTag?.length > 0
          const lineHeight = 20.72
          return lineHeight * (hasAdditionalTag ? 2 : 1) + 8
        })
        .style('fill', 'white')
        .style('stroke', '#000928')
        .style('stroke-width', '1px')
        .style('display', (d) => (d.nameArea ? 'initial' : 'none'))
      labelsAreaText = labelsArea
        .append('text')
        // .attr('dy', '-3em')
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('line-height', '20.72px')
        .style('fill', '#000928')
        .style('z-index', 2)
        .text((d) => d.nameArea)
      labelsAreaText2 = labelsArea
        .append('text')
        // .attr('dy', '-3em')
        .style('text-anchor', 'middle')
        .style('font-size', '14px')
        .style('line-height', '20.72px')
        .style('fill', '#000928')
        .style('z-index', 2)
        .style('opacity', 0.5)
        .text((d) => d.additionalTag)

      // set simulation's nodes to our newly created nodes array
      // simulation starts running automatically once nodes are set
      simulation.nodes(nodes).on('tick', ticked).restart()

      function ticked() {
        bubbles.attr('cx', (d) => d.x).attr('cy', (d) => d.y)

        labels.attr('x', (d) => d.x).attr('y', (d) => d.y - 16)
        labels
          .selectAll('tspan')
          .attr('x', (d) => d.x)
          .attr('y', (d) => d.y - 16)

        labelsAreaText
          .attr('x', (d, i, n) => {
            const textDOMArray = n[i].parentElement.querySelectorAll('text')
            const hasAdditionalTag = d.additionalTag?.length > 0
            if (hasAdditionalTag) {
              const leftDistance =
                (textDOMArray[1].getBBox()?.width -
                  textDOMArray[0].getBBox()?.width) /
                2
              return d.x + d.radius - leftDistance - 20
            } else {
              return d.x + d.radius - 20
            }
          })
          .attr('y', (d) => {
            const hasAdditionalTag = d.additionalTag?.length > 0
            const originalY = d.y - d.radius * 0.6
            return hasAdditionalTag ? originalY - 25 : originalY
          })
        labelsAreaText2
          .attr('x', (d) => d.x + d.radius - 20)
          .attr('y', (d) => {
            const hasAdditionalTag = d.additionalTag?.length > 0
            const originalY = d.y - d.radius * 0.6 + 20
            return hasAdditionalTag ? originalY - 25 : originalY
          })
        labelsAreaTextBBox
          .attr('x', (d, i, n) => {
            const textDOMArray = n[i].parentElement.querySelectorAll('text')
            const hasAdditionalTag = d.additionalTag?.length > 0
            const maxWidth = hasAdditionalTag
              ? textDOMArray[1].getBBox()?.width
              : textDOMArray[0].getBBox()?.width

            return d.x - maxWidth / 2 - 8 + d.radius - 20
          })
          .attr('y', (d) => {
            const hasAdditionalTag = d.additionalTag?.length > 0
            const originalY = d.y - 12 - 5 - d.radius * 0.66 + 3
            return hasAdditionalTag ? originalY - 25 : originalY
          }) // y -18
      }

      function createNodes(rawData) {
        // use max size in the data as the max in the scale's domain
        // note we have to ensure that size is a number
        const maxSize = d3.max(rawData, (d) => +d.size)

        // size bubbles based on area
        const radiusScale = d3.scaleSqrt().domain([0, maxSize]).range([60, 110])

        const fontSizeScale = d3
          .scaleLinear()
          .domain([0, maxSize])
          .range([18, 32])

        // use map() to convert raw data into node data
        const myNodes = rawData.map((d) => ({
          ...d,
          radius: radiusScale(+d.size),
          size: +d.size,
          fontSize: fontSizeScale(+d.size),
          x: Math.random() * 900,
          y: Math.random() * 800,
        }))

        return myNodes
      }
    },
  },
}
</script>

<style scoped>
/* styles */
svg {
  min-height: 600px;
}
</style>
