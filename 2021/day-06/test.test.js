import { describe, test, assert } from 'vitest'

import findValues from './solution'

const sums = {
  case_1: {
    input: [[3, 5, 7, 2], 10],
    output: [3, 7]
  },
  case_2: {
    input: [[-3, -2, 7, -5], 10],
    output: null
  },
  case_3: {
    input: [[2, 2, 3, 1], 4],
    output: [2, 2]
  },
  case_4: {
    input: [[6, 7, 1, 2], 8],
    output: [6, 2]
  },
  case_5: {
    input: [[0, 2, 2, 3, -1, 1, 5], 6],
    output: [1, 5]
  }
}

describe('findValues', () => {
  test('Case 1', () => {
    assert.deepEqual(findValues(sums.case_1.input[0], sums.case_1.input[1]), sums.case_1.output)
  })

  test('Case 2', () => {
    assert.deepEqual(findValues(sums.case_2.input[0], sums.case_2.input[1]), sums.case_2.output)
  })

  test('Case 3', () => {
    assert.deepEqual(findValues(sums.case_3.input[0], sums.case_3.input[1]), sums.case_3.output)
  })

  test('Case 4', () => {
    assert.deepEqual(findValues(sums.case_4.input[0], sums.case_4.input[1]), sums.case_4.output)
  })

  test('Case 5', () => {
    assert.deepEqual(findValues(sums.case_5.input[0], sums.case_5.input[1]), sums.case_5.output)
  })
})
