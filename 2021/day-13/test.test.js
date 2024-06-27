import { describe, test, assert, expect } from 'vitest'

import wrapGifts from './solution.js'

const gifts = {
  case_1: {
    input: ['📷', '⚽️'],
    expected:
    ['****',
      '*📷*',
      '*⚽️*',
      '****'
    ]
  },
  case_2: {
    input: ['🏈🎸', '🎮🧸'],
    expected:
    ['******',
      '*🏈🎸*',
      '*🎮🧸*',
      '******'
    ]
  }
}

describe('wrapGifts', () => {
  test('the parameter must be an array', () => {
    expect(() => wrapGifts()).toThrowError('parameter must be an array')
  })

  test('the should return an emoty array if gets an empty array as parameter', () => {
    expect(wrapGifts([])).toStrictEqual([])
  })
})

describe('test cases', () => {
  test("['📷', '⚽️']", () => {
    assert.deepEqual(wrapGifts(gifts.case_1.input), gifts.case_1.expected)
  })

  test("['🏈🎸', '🎮🧸']", () => {
    assert.deepEqual(wrapGifts(gifts.case_2.input), gifts.case_2.expected)
  })
})
