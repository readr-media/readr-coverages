<template>
  <div class="chart-wrapper">
    <svg ref="chart" />
    <div
      v-show="shouldShowTooltip"
      class="chart-tooltip"
      :style="{
        top: `${tooltipY + 20}px`,
        left: `${tooltipX + 20}px`,
      }"
    >
      <h1 v-text="tooltipTitle" />
      <p v-text="tooltipDescription" />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/namespace
import * as topojson from 'topojson'
import * as d3 from 'd3'
import taiwanTopology from './counties-mercator-10t.json'

export default {
  props: {
    countyFillColorConfig: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chart: undefined,
      paths: undefined,
      shouldShowTooltip: false,
      tooltipX: 0,
      tooltipY: 0,
      tooltipTitle: '',
      tooltipDescription: '',
    }
  },
  watch: {
    countyFillColorConfig() {
      this.chart
        .selectAll('path')
        .data(this.geojson.features)
        .style('fill', (d) => {
          const countyConfig = this.countyFillColorConfig.find(
            function findNameWithProps(county) {
              return county.name === d.properties.COUNTYNAME
            }
          )

          return (countyConfig || {}).color || '#E5E5E5'
        })
        .style('opacity', (d) => {
          const countyConfig = this.countyFillColorConfig.find(
            function findNameWithProps(county) {
              return county.name === d.properties.COUNTYNAME
            }
          )
          return (countyConfig || {}).opacity || 1
        })
    },
  },
  mounted() {
    const chartDomNode = this.$refs.chart
    // const mapWidth = chartDomNode.getBoundingClientRect().width
    const width = 500
    const height = 680
    // const aspect = height / width
    this.chart = d3
      .select(chartDomNode)
      .attr('preserveAspectRatio', 'xMidYMid')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('width', width)
      .attr('height', height)
    // eslint-disable-next-line import/namespace
    this.geojson = topojson.feature(
      taiwanTopology,
      taiwanTopology.objects.counties
    )
    this.chart
      .selectAll('path')
      .data(this.geojson.features)
      .enter()
      .append('path')
      .attr('d', d3.geoPath())
      .attr('data-county-name', function (d) {
        return d.properties.COUNTYNAME
      })
      .style('fill', (d) => {
        const countyConfig = this.countyFillColorConfig.find(
          function findNameWithProps(county) {
            return county.name === d.properties.COUNTYNAME
          }
        )

        return (countyConfig || {}).color || '#E5E5E5'
      })
      .style('opacity', (d) => {
        const countyConfig = this.countyFillColorConfig.find(
          function findNameWithProps(county) {
            return county.name === d.properties.COUNTYNAME
          }
        )
        return (countyConfig || {}).opacity || 1
      })
      .on('mouseover', (event, d) => {
        const countyConfig = this.countyFillColorConfig.find(
          function findNameWithProps(county) {
            return county.name === d.properties.COUNTYNAME
          }
        )
        if (countyConfig && countyConfig.hoverInfo) {
          this.shouldShowTooltip = true
          this.tooltipTitle = countyConfig.hoverInfo.title
          this.tooltipDescription = countyConfig.hoverInfo.description
        }
      })
      .on('mousemove', (event) => {
        this.tooltipX = event.clientX
        this.tooltipY = event.clientY
      })
      .on('mouseout', () => {
        this.shouldShowTooltip = false
        this.tooltipTitle = ''
        this.tooltipDescription = ''
      })
  },
}
</script>

<style scoped>
svg {
  width: 100%;
  height: 100%;
}
svg::v-deep path {
  fill: #e5e5e5;
  stroke: white;
  stroke-width: 2px;
}

.chart-tooltip {
  position: fixed;
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

@media (max-width: 1024px) {
  /* disable mouse events use by tooltip in mobile */
  svg {
    pointer-events: none;
  }
}
</style>
