export default function countingSheeps (sheeps) {
  if (!Array.isArray(sheeps)) throw new Error('The parameter must be an array')

  const keyWords = {
    color: 'rojo',
    regex: /(?=.*a)(?=.*n)/gi
  }

  const newSheeps = []
  for (const sheep of sheeps) {
    if (sheep.color === keyWords.color && keyWords.regex.test(sheep.name)) newSheeps.push(sheep)
  }

  return newSheeps
}
