function generateTime(str) {
  const [year, month, date] = str.split('-')
  const intYear = parseInt(year)
  const intMonth = parseInt(month)
  const intDate = parseInt(date)
  const time = new Date(intYear, intMonth - 1, intDate)
  return time.getTime()
}

export { generateTime }
