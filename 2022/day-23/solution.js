export default function canReconfigure (from, to) {
  if (typeof from !== 'string') throw new Error('From must be string')
  if (typeof to !== 'string') throw new Error('From must be string')

  const isSameLength = from.length === to.length
  if (!isSameLength) return false

  const isSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!isSameUniqueLetters) return false

  const transformations = {}

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter]
    if (storedLetter && storedLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }

  return true
}
