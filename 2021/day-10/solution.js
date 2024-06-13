export default function getCoins (change, remaining = null, changeArray = [0, 0, 0, 0, 0, 0]) {
  const coins = {
    1: 0,
    2: 1,
    5: 2,
    10: 3,
    20: 4,
    50: 5
  }

  const coinValues = [50, 20, 10, 5, 2, 1]

  // Initialize remaining on the first call
  if (remaining === null) {
    remaining = change
  }

  // Base case
  if (remaining === 0) {
    return changeArray
  }

  // Iterate over the coins to find the largest coin less than or equal to the remaining change
  for (let i = 0; i < coinValues.length; i++) {
    if (remaining >= coinValues[i]) {
      changeArray[coins[coinValues[i]]]++ // Increment the coin count
      remaining -= coinValues[i] // Reduce the remaining change
      return getCoins(change, remaining, changeArray) // Recursive call
    }
  }
}