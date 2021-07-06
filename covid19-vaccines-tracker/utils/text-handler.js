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

function formatLinkText(rawText = '', link = '') {
  const rawLinks = 'https://aaa；https://bbb；https://ccc'
  const links = rawLinks.split('；')
  let mock = '<span>text (link) text text text text (link) text (link)</span>'
  links.forEach((link) => {
    mock = mock
      .replace('(', `<a href="${link}" target="_blank">`)
      .replace(')', '</a>')
  })
  console.log(mock)
  if (link && rawText.includes('(') && rawText.includes(')')) {
    const [str1, str2] = rawText.split('(')
    const [str3, str4] = str2.split(')')
    return {
      str1,
      str3,
      str4,
      link,
    }
  }
  return {
    str1: rawText,
    str3: '',
    str4: '',
    link: '',
  }
}

export { handleLineBreak, handleTaiWord, formatLinkText }
