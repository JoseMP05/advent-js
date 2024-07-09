/**
 * Checks if the given array of jumps satisfies the sled jump condition.
 *
 * @param {number[]} jumps - The array of jumps.
 * @returns {boolean} - Returns true if the jumps satisfy the sled jump condition, false otherwise.
 */
export default function checkSledJump (jumps) {
  if (jumps.length < 3) return false

  let up = false
  let down = false

  for (let i = 1; i <= jumps.length - 1; i++) {
    if (jumps[i] === jumps[i - 1]) return false
    if (jumps[i] > jumps[i - 1]) {
      if (!up) up = true
      if (down) return false
    }
    if (jumps[i] < jumps[i - 1]) {
      if (!down) down = true
      if (!up) return false
    }
  }
  if (!up || !down) return false
  return true
}
