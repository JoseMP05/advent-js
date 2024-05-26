export default function listGifts (gifts) {
  if (typeof gifts !== 'string') throw new Error('Parameter must be string')

  const splitGifts = gifts.split(' ').filter(word => !word.includes('_') && word.length > 0)
  const result = {}

  for (const word of splitGifts) {
    if (result.hasOwnProperty(word) === false) result[word] = 1
    else result[word] += 1
  }

  return result
}
