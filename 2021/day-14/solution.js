/**
 * Finds the missing reindeer in the given array of IDs.
 *
 * @param {number[]} ids - The array of reindeer IDs.
 * @returns {number} - The ID of the missing reindeer.
 */
export default function missingReindeer (ids) {
  // sort the array
  ids.sort((a, b) => a - b)

  let left = 0
  let right = ids.length - 1

  while (right >= left) {
    const currentIndex = Math.floor((left + right) / 2)
    if (ids[currentIndex] === currentIndex) {
      left = currentIndex + 1
    } else {
      right = currentIndex - 1
    }
  }

  return left
}
