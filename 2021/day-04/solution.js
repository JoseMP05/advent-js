export default function createChristmassTree (height) {
  if (!Number.isInteger(height)) throw new Error('Parameter must be integer number')
  if (height < 1) throw new Error('Parameter cannot be less than 1')
  if (height > 100) throw new Error('Parameter cannot be greater than 100')

  const width = 2 * height - 1
  const createRow = (content, padding) => '_'.repeat(padding) + content + '_'.repeat(padding)
  let tree = ''
  let leafs = 1

  for (let i = 1; i <= height; i++) {
    tree += createRow('*'.repeat(leafs), (width - leafs) / 2) + '\n'
    leafs += 2
  }

  const trunkRow = createRow('#', (width - 1) / 2)
  tree += trunkRow + '\n' + trunkRow

  return tree
}
