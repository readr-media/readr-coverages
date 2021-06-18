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

function mapColorHandler(city, taiwanTodayTotal, taiwanTodayCityMax) {
  let color
  const cityCount = city.city_today
  // 4是暫定變數
  // const X = taiwanTodayTotal / 4 / 100
  const unit = taiwanTodayCityMax / 5

  if (cityCount === 0) {
    color = 'rgba(0, 9, 40, 0.1)'
  } else if (cityCount < unit * 1) {
    color = 'rgba(231, 62, 51, 0.2)'
  } else if (cityCount < unit * 2) {
    color = 'rgba(231, 62, 51, 0.4)'
  } else if (cityCount < unit * 3) {
    color = 'rgba(231, 62, 51, 0.6)'
  } else if (cityCount < unit * 4) {
    color = 'rgba(231, 62, 51, 0.8)'
  } else if (cityCount > unit * 4) {
    color = 'rgba(231, 62, 51, 1)'
  }
  // if (cityCount === 0 * X) {
  //   color = 'rgba(0, 9, 40, 0.1)'
  // } else if (cityCount < 20 * X) {
  //   color = 'rgba(231, 62, 51, 0.2)'
  // } else if (cityCount < 40 * X) {
  //   color = 'rgba(231, 62, 51, 0.4)'
  // } else if (cityCount < 60 * X) {
  //   color = 'rgba(231, 62, 51, 0.6)'
  // } else if (cityCount < 80 * X) {
  //   color = 'rgba(231, 62, 51, 0.8)'
  // } else if (cityCount > 80 * X) {
  //   color = 'rgba(231, 62, 51, 1)'
  // }
  return color
}

export { colorHandler, mapColorHandler }
