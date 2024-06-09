export default function groupBy (array, toGroup) {
  const result = {}

  for (const element of array) {
    let property = null

    if (typeof toGroup === 'string') property = element[toGroup]
    else if (typeof toGroup === 'function') property = toGroup(element)

    if (result[property]) result[property].push(element)
    else result[property] = [element]
  }

  return result
}
