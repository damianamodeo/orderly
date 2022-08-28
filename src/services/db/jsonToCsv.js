export const jsonToCsv = (json) => {
  const array = [Object.keys(json[1])].concat(json)

  return array.map(it => {
    return Object.values(it).toString()
  }).join('\r')
}
