export default function getMinJump (obstacles) {
  if (!Array.isArray(obstacles)) throw new Error('Obstacles must be an array')

  obstacles.sort((a, b) => a - b)
  let minJump = 1

  for (let i = 0; i < obstacles[obstacles.length - 1] + 1; i += minJump) {
    if (obstacles.includes(i)) {
      minJump++
      i = 0
    }
  }

  return minJump
}
