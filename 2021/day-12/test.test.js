import { describe, test, assert } from 'vitest'

import getMinJump from './solution.js'

const testCases = {
  case_1: {
    input: [5, 3, 6, 7, 9],
    expected: 4
  },
  case_2: {
    input: [2, 4, 6, 8, 10],
    expected: 7
  },
  case_3: {
    input: [1, 2, 3, 5],
    expected: 4
  },
  case_4: {
    input: [3, 7, 5],
    expected: 2
  },
  case_5: {
    input: [9, 5, 1],
    expected: 2
  }
}

describe('getMinJump', () => {
  test(`${testCases.case_1.input}`, () => {
    assert.equal(getMinJump(testCases.case_1.input), testCases.case_1.expected)
  })

  test(`${testCases.case_2.input}`, () => {
    assert.equal(getMinJump(testCases.case_2.input), testCases.case_2.expected)
  })

  test(`${testCases.case_3.input}`, () => {
    assert.equal(getMinJump(testCases.case_3.input), testCases.case_3.expected)
  })

  test(`${testCases.case_4.input}`, () => {
    assert.equal(getMinJump(testCases.case_4.input), testCases.case_4.expected)
  })

  test(`${testCases.case_5.input}`, () => {
    assert.equal(getMinJump(testCases.case_5.input), testCases.case_5.expected)
  })
})
