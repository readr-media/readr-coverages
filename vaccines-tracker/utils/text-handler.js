function handleLineBreak(text) {
  if (text && typeof text === 'string') {
    return text.replace(/\n|\r\n/g, '<br>')
  } else {
    return ''
  }
}

function handleTaiWord(text) {
  return text.replace('臺', '台')
}

export { handleLineBreak, handleTaiWord }
