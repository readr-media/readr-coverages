// time:2:30 AMPM:PM
function amPmHandler(time, AMPM) {
  if (AMPM) {
    const timeArray = time.split(':')
    let hour = parseInt(timeArray[0])
    hour += 12

    const newTimeArray = [hour, timeArray[1]]
    const newTime = newTimeArray.join(':')

    return newTime
  } else return time
}

export { amPmHandler }
