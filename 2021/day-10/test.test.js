import { describe, test, expect, assert } from 'vitest'

import getCoins from './solution'

const coins = {
  51: {
    input: 51,
    output: [1, 0, 0, 0, 0, 1]
  },
  3: {
    input: 3,
    output: [1, 1, 0, 0, 0, 0]
  },
  5: {
    input: 5,
    output: [0, 0, 1, 0, 0, 0]
  },
  16: {
    input: 16,
    output: [1, 0, 1, 1, 0, 0]
  },
  100: {
    input: 100,
    output: [0, 0, 0, 0, 0, 2]
  }

}

describe('getCoins', () => {
  test.skip('should throw error if the first parameter is not an integer number', () => {
    expect(() => getCoins(2.5)).toThrowError('Parameter must be an integer number')
  })
})

describe('Use cases', () => {
  test('51', () => {
    assert.deepEqual(getCoins(coins[51].input), coins['51'].output)
  })

  test('100', () => {
    assert.deepEqual(getCoins(coins[100].input), coins[100].output)
  })

  test('3', () => {
    assert.deepEqual(getCoins(coins[3].input), coins[3].output)
  })

  test('5', () => {
    assert.deepEqual(getCoins(coins[5].input), coins[5].output)
  })

  test('16', () => {
    assert.deepEqual(getCoins(coins[16].input), coins[16].output)
  })
})
