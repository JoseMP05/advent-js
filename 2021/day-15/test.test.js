import { describe, test, expect } from 'vitest'

import checkSledJump from './solution.js'

const jumps = {
  case_1: {
    input: [1, 2, 3, 2, 1],
    expected: true
  },
  case_2: {
    input: [0, 1, 0],
    expected: true
  },
  case_3: {
    input: [0, 3, 2, 1],
    expected: true
  },
  case_4: {
    input: [0, 1000, 1],
    expected: true
  },
  case_5: {
    input: [2, 4, 4, 6, 2],
    expected: false
  },
  case_6: {
    input: [1, 2, 3],
    expected: false
  },
  case_7: {
    input: [1, 2, 3, 2, 1, 2, 3],
    expected: false
  }
}

describe('Sled Jump', () => {
  test('should return false if only up', () => {
    expect(checkSledJump([1, 2, 3])).toBe(false)
  })

  test('should return false if only down', () => {
    expect(checkSledJump([3, 2, 1])).toBe(false)
  })

  test('should return false if has constant intervals', () => {
    expect(checkSledJump([2, 4, 4, 6, 2])).toBe(false)
  })

  test('should return false if up or down twice', () => {
    expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBe(false)
  })
})

describe('tets cases', () => {
  for (const key in jumps) {
    test(`${jumps[key].expected} for [${jumps[key].input}]`, () => {
      expect(checkSledJump(jumps[key].input)).toBe(jumps[key].expected)
    })
  }
})
