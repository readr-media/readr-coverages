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

function formatLinkText(rawText = '', rawLink = '') {
  const links = rawLink.includes('；') ? rawLink.split('；') : [rawLink]
  let returnText = `<span>${rawText}</span>`
  if (links.length) {
    links.forEach((link) => {
      returnText = returnText
        .replace(
          '(',
          `<a href="${link}" target="_blank" style="text-decoration: underline;">`
        )
        .replace(')', '</a>')
    })
  }
  return returnText
}

export { handleLineBreak, handleTaiWord, formatLinkText }
