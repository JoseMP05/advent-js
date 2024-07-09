import { describe, test, expect } from 'vitest'

import missingReindeer from './solution.js'

const reindeer = {
  case_1: {
    input: [0, 2, 3],
    expected: 1
  },
  case_2: {
    input: [5, 6, 1, 2, 3, 7, 0],
    expected: 4
  },
  case_3: {
    input: [0, 1],
    expected: 2
  },
  case_4: {
    input: [3, 0, 1],
    expected: 2
  },
  case_5: {
    input: [3, 0, 1],
    expected: 2
  },
  case_6: {
    input: [0],
    expected: 1
  }
}

// make the test cases
describe('2021: Day 14 - Missing Reindeer', () => {
  test(`${reindeer.case_1.input}`, () => {
    expect(missingReindeer(reindeer.case_1.input)).toEqual(reindeer.case_1.expected)
  })

  test(`${reindeer.case_2.input}`, () => {
    expect(missingReindeer(reindeer.case_2.input)).toEqual(reindeer.case_2.expected)
  })

  test(`${reindeer.case_3.input}`, () => {
    expect(missingReindeer(reindeer.case_3.input)).toEqual(reindeer.case_3.expected)
  })

  test(`${reindeer.case_4.input}`, () => {
    expect(missingReindeer(reindeer.case_4.input)).toEqual(reindeer.case_4.expected)
  })

  test(`${reindeer.case_5.input}`, () => {
    expect(missingReindeer(reindeer.case_5.input)).toEqual(reindeer.case_5.expected)
  })

  test(`${reindeer.case_6.input}`, () => {
    expect(missingReindeer(reindeer.case_6.input)).toEqual(reindeer.case_6.expected)
  })
})
