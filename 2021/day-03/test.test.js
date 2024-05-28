import { describe, test, expect, assert } from 'vitest'

import cardIsValid from './solution'

const cards = {
  base: {
    input: 'bici coche (balón) bici coche peluche',
    output: true
  },
  case_2: {
    input: '(muñeca) consola bici',
    output: true
  },
  case_3: {
    input: '(())',
    output: false
  },
  case_4: {
    input: 'bici coche (balón) (bici coche peluche',
    output: false
  },
  bracketNotClosed: {
    input: 'bici coche (balón bici coche',
    output: false
  },
  containsSquareBrackets: {
    input: 'peluche (bici [coche) bici coche balón',
    output: false
  },
  containsBraces: {
    input: '(peluche {) bici',
    output: false
  },
  emptyBrackets: {
    input: '() bici',
    output: false
  },
  disorganizedBrackets: {
    input: 'bici )coche (balón bici coche',
    output: false
  }
}

describe('cardIsValid', () => {
  test('should throw error if the parameter is not provided', () => {
    expect(() => cardIsValid()).toThrowError()
  })

  test('should throw error if the parameter is not string', () => {
    expect(() => cardIsValid(123)).toThrowError()
  })

  test('should return false if card includes "{"', () => {
    expect(cardIsValid('(peluche {) bici')).toBe(false)
  })

  test('should return false if card includes "["', () => {
    expect(cardIsValid('(peluche []) bici')).toBe(false)
  })

  test('should return false if a bracket is open "("  but it is not closed ")"', () => {
    expect(cardIsValid('(peluche bici')).toBe(false)
  })

  test('should return false if a bracket is open after it is closed ")("', () => {
    expect(cardIsValid(')peluche( bici')).toBe(false)
  })

  test('should return false if a bracket is empty', () => {
    expect(cardIsValid('() bici')).toBe(false)
  })
})

describe('Use Cases', () => {
  test('base', () => {
    assert.isTrue(cardIsValid(cards.base.input), cards.base.output)
  })

  test('case 2', () => {
    assert.isTrue(cardIsValid(cards.case_2.input), cards.case_2.output)
  })

  test('case 3', () => {
    assert.isFalse(cardIsValid(cards.case_3.input), cards.case_3.output)
  })

  test('case 4', () => {
    assert.isFalse(cardIsValid(cards.case_4.input), cards.case_4.output)
  })

  test('brackets Not Closed', () => {
    assert.isFalse(cardIsValid(cards.bracketNotClosed.input), cards.bracketNotClosed.output)
  })

  test('contains Square Brackets', () => {
    assert.isFalse(cardIsValid(cards.containsSquareBrackets.input), cards.containsSquareBrackets.output)
  })

  test('contains Braces {}', () => {
    assert.isFalse(cardIsValid(cards.containsBraces.input), cards.containsBraces.output)
  })

  test('empty Brackets', () => {
    assert.isFalse(cardIsValid(cards.emptyBrackets.input), cards.emptyBrackets.output)
  })

  test('disorganized Brackets', () => {
    assert.isFalse(cardIsValid(cards.disorganizedBrackets.input), cards.disorganizedBrackets.output)
  })
})
