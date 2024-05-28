export default function cardIsValid (card) {
  if (typeof card !== 'string') throw new Error()

  let bracketIsOpen = false
  const count = {
    opened: 0,
    closed: 0
  }

  for (let char = 0; char < card.length; char++) {
    if (card[char] === '{' || card[char] === '[') return false
    if (card[char] === ')' && !bracketIsOpen) return false
    if (card[char] === ')' && card[char - 1] === '(') return false // Check empty brackets
    if (card[char] === ')') count.closed += 1
    if (card[char] === '(') {
      count.opened += 1
      bracketIsOpen = true
    }
  }

  if (count.opened !== count.closed) return false

  return true
}
