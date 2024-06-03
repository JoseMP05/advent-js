export default function findValues (array, result) {
  if (!Array.isArray(array)) throw new Error('First parameter must be array')
  if (typeof result !== 'number') throw new Error('Second parameter must be number')

  for (let i = 0; i < array.length; i++) {
    const remaining = result - array[i]
    const copyArray = [...array]
    copyArray.splice(i, 1) // Delete current index
    if (copyArray.indexOf(remaining) !== -1) return [array[i], remaining]
  }

  return null
}
