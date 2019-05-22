const getSize = el => {
  if (!el || !el.offsetWidth || !el.offsetHeight) {
    return {
      width: 0,
      height: 0,
    }
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight,
  }
}

export default getSize
