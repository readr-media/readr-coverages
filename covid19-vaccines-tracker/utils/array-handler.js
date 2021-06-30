function isArrayEmpty(target) {
  return target && target.length !== target.filter((d) => d === '').length
}

export { isArrayEmpty }
