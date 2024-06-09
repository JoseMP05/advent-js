import { describe, test, assert } from 'vitest'

import groupBy from './solution'

const groups = {
  mathFloor: {
    input: [[6.1, 4.2, 6.3], Math.floor],
    output: { 6: [6.1, 6.3], 4: [4.2] }
  },
  length: {
    input: [['one', 'two', 'three'], 'length'],
    output: { 3: ['one', 'two'], 5: ['three'] }
  },
  age: {
    input: [[{ age: 23 }, { age: 24 }], 'age'],
    output: { 23: [{ age: 23 }], 24: [{ age: 24 }] }
  },
  timestamp: {
    input: [[1397639141184, 1363223700000], timestamp => new Date(timestamp).getFullYear()],
    output: { 2013: [1363223700000], 2014: [1397639141184] }
  },
  rating: {
    input: [[
      { title: 'JavaScript: The Good Parts', rating: 8 },
      { title: 'Aprendiendo Git', rating: 10 },
      { title: 'Clean Code', rating: 9 }
    ], 'rating'],
    output: {
      8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
      9: [{ title: 'Clean Code', rating: 9 }],
      10: [{ title: 'Aprendiendo Git', rating: 10 }]
    }
  }
}

describe('groupBy', () => {
  test('Math.floor', () => {
    assert.deepEqual(groupBy(groups.mathFloor.input[0], groups.mathFloor.input[1]), groups.mathFloor.output)
  })

  test('Age', () => {
    assert.deepEqual(groupBy(groups.age.input[0], groups.age.input[1]), groups.age.output)
  })

  test('length', () => {
    assert.deepEqual(groupBy(groups.length.input[0], groups.length.input[1]), groups.length.output)
  })

  test('timestamp', () => {
    assert.deepEqual(groupBy(groups.timestamp.input[0], groups.timestamp.input[1]), groups.timestamp.output)
  })

  test('rating', () => {
    assert.deepEqual(groupBy(groups.rating.input[0], groups.rating.input[1]), groups.rating.output)
  })
})
