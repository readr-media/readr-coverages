export default function (svg, { width = 0, height = 0 } = {}) {
  svg
    .attr('preserveAspectRatio', 'xMidYMid')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .style('width', '100%')
    .style('height', '100%')
  return svg
}
