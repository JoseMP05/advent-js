import { describe, test, assert } from 'vitest'

export default function maxProfit (prices) {
  let min = prices[0]
  let maxDiff = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i]
    else if (prices[i] - min > maxDiff) maxDiff = prices[i] - min
  }

  if (maxDiff <= 0) return -1

  return maxDiff
}

const prices = {
  btc: {
    input: [39, 18, 29, 25, 34, 32, 5],
    output: 16
  },
  eth: {
    input: [10, 20, 30, 40, 50, 60, 70],
    output: 60
  },
  doge: {
    input: [18, 15, 12, 11, 9, 7],
    output: -1
  },
  ada: {
    input: [3, 3, 3, 3, 3],
    output: -1
  },
  other: {
    input: [13, 86, 4, 78, 1, 50],
    output: 74
  }
}
describe('maxProfit', () => {
  test('btc', () => {
    assert.equal(maxProfit(prices.btc.input), prices.btc.output)
  })

  test('eth', () => {
    assert.equal(maxProfit(prices.eth.input), prices.eth.output)
  })

  test('doge', () => {
    assert.equal(maxProfit(prices.doge.input), prices.doge.output)
  })

  test('ada', () => {
    assert.equal(maxProfit(prices.ada.input), prices.ada.output)
  })

  test('other', () => {
    assert.equal(maxProfit(prices.other.input), prices.other.output)
  })
})
