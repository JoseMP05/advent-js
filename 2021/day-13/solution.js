/**
 * Wraps the given gifts in a decorative box.
 * @param {Array<string>} gifts - The array of gifts to be wrapped.
 * @returns {Array<string>} - The wrapped gifts in a decorative box.
 * @throws {Error} - If the parameter is not an array.
 */
export default function wrapGifts (gifts) {
  if (!Array.isArray(gifts)) throw new Error('parameter must be an array')
  if (gifts.length === 0) return []

  const length = gifts[0].length + 2
  const result = ['*'.repeat(length)]

  for (const gift of gifts) {
    result.push(`*${gift}*`)
  }
  result.push('*'.repeat(length))

  return result
}
