import { describe, test, expect, assert } from 'vitest'

import createChristmassTree from './solution'

const trees = {
  case_1: {
    input: 5,
    output:
    '____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____'
  },

  case_2: {
    input: 3,
    output:
    '__*__\n_***_\n*****\n__#__\n__#__'
  },

  case_3: {
    input: 4,
    output:
    '___*___\n__***__\n_*****_\n*******\n___#___\n___#___'
  }
}

describe('createChristmassTree', () => {
  test('should throw error if paremeter is not provided', () => {
    expect(() => createChristmassTree()).toThrowError()
  })

  test('should throw error if paremeter is not integer number', () => {
    expect(() => createChristmassTree(100.1)).toThrowError('Parameter must be integer number')
  })

  test('should throw error if paremeter is less than 1', () => {
    expect(() => createChristmassTree(0)).toThrowError('Parameter cannot be less than 1')
  })

  test('should throw error if paremeter is greater than 100', () => {
    expect(() => createChristmassTree(101)).toThrowError('Parameter cannot be greater than 100')
  })
})

describe('Use Cases', () => {
  test('height 5', () => {
    assert.equal(createChristmassTree(trees.case_1.input), trees.case_1.output)
  })

  test('height 3', () => {
    assert.equal(createChristmassTree(trees.case_2.input), trees.case_2.output)
  })

  test('height 4', () => {
    assert.equal(createChristmassTree(trees.case_3.input), trees.case_3.output)
  })
})
