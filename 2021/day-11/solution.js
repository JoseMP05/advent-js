/**
 * Determines whether it is more cost-effective to buy a product with fidelity points.
 * @param {number} entries - The number of entries to purchase.
 * @returns {boolean} - Returns true if it is more cost-effective to buy with fidelity points, false otherwise.
 * @throws {Error} - Throws an error if the entries parameter is not an integer.
 */

export default function shouldBuyFidelity (entries) {
  if (!Number.isInteger(entries)) throw new Error('Entries must be integer')
  const COST = 12
  const FIDELITY = 250
  const DESCOUNT = 0.75

  const normal = COST * entries
  let fidelityCost = FIDELITY

  for (let i = 1; i <= entries; i++) {
    fidelityCost += COST * Math.pow(DESCOUNT, i)
  }

  return fidelityCost < normal
}
