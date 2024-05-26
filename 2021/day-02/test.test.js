import { describe, test, expect, assert } from 'vitest'

import listGifts from './solution'

const gifts = {
  base: {
    input: 'bici coche balón _playstation bici coche peluche',
    output: {
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1
    }
  },
  blankSpaces: {
    input: '   ',
    output: {}
  },
  empty: {
    input: '',
    output: {}
  },
  repeatNoValidWords: {
    input: '_playstation _playstation _playstation',
    output: {}
  }

}

describe('listGifts', () => {
  test('should throw error if parameter is not provided', () => {
    expect(() => listGifts()).toThrowError()
  })

  test('should throw error if parameter is not string', () => {
    expect(() => listGifts(123)).toThrowError()
  })

  test('should return an object', () => {
    expect(typeof listGifts('gift1 gift2 gift3')).toBe('object')
  })
})

describe('Use cases', () => {
  test('Base case', () => {
    assert.deepEqual(listGifts(gifts.base.input), gifts.base.output)
  })

  test('blankSpaces', () => {
    assert.deepEqual(listGifts(gifts.blankSpaces.input), gifts.blankSpaces.output)
  })

  test('empty', () => {
    assert.deepEqual(listGifts(gifts.empty.input), gifts.empty.output)
  })

  test('repeat No Valid Words', () => {
    assert.deepEqual(listGifts(gifts.repeatNoValidWords.input), gifts.repeatNoValidWords.output)
  })
})
