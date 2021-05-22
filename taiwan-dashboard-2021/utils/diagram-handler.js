function colorHandler(level) {
  let color
  switch (level) {
    case 3:
      color = 'rgba(231, 62, 51, 0.8)'
      break

    case 2:
      color = 'rgba(231, 62, 51, 0.3)'
      break

    case 1:
      color = 'rgba(231, 62, 51, 0.2)'
      break

    case 0:
      color = 'rgba(231, 62, 51, 0.1)'
      break

    default:
      color = 'rgba(231, 62, 51, 1)'
      break
  }
  return color
}

export { colorHandler }
