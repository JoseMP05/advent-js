import { describe, assert, test } from 'vitest'

import shouldBuyFidelity from './solution.js'

const entries = {
  1: {
    input: 1,
    output: false
  },
  3: {
    input: 3,
    output: false
  },

  4: {
    input: 4,
    output: false
  },
  5: {
    input: 5,
    output: false
  },

  24: {
    input: 24,
    output: true
  },

  100: {
    input: 100,
    output: true
  },
  500: {
    input: 500,
    output: true
  }
}

describe('shouldBuyFidelity', () => {
  test('1', () => {
    assert.equal(shouldBuyFidelity(entries[1].input), entries[1].output)
  })

  test('3', () => {
    assert.equal(shouldBuyFidelity(entries[3].input), entries[3].output)
  })

  test('100', () => {
    assert.equal(shouldBuyFidelity(entries[100].input), entries[100].output)
  })

  test('500', () => {
    assert.equal(shouldBuyFidelity(entries[500].input), entries[500].output)
  })

  test('4', () => {
    assert.equal(shouldBuyFidelity(entries[4].input), entries[4].output)
  })

  test('5', () => {
    assert.equal(shouldBuyFidelity(entries[5].input), entries[5].output)
  })

  test('24', () => {
    assert.equal(shouldBuyFidelity(entries[24].input), entries[24].output)
  })
})
