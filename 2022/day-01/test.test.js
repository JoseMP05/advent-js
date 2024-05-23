import { describe, test, expect, assert } from 'vitest'

import countingSheeps from './solutions'

const sheeps = {
  base: [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
  ],
  notRedSheeps: [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'amarillo' },
    { name: 'Navidad', color: 'Morado' }
  ],
  notNASheeps: [
    { name: 'Doe', color: 'red' },
    { name: 'Euge', color: 'red' },
    { name: 'Carlos', color: 'red' }
  ]
}

const expectedReturn = {
  base: [
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' }
  ],
  notRedSheeps: [],
  notNASheeps: []
}
describe('Counting sheeps to sleep definition', () => {
  test('should throw error if the paremeter is not provided', () => {
    expect(() => countingSheeps()).toThrowError()
  })

  test('should throw error if the paremeter is not an array', () => {
    expect(() => countingSheeps('Testing')).toThrowError('The parameter must be an array')
  })

  test('should return [] if there are not red sheeps', () => {
    expect(countingSheeps(sheeps.notRedSheeps)).toStrictEqual([])
  })

  test('should return [] if there are not sheeps containing "n" and "a" in its name', () => {
    expect(countingSheeps(sheeps.notNASheeps)).toStrictEqual([])
  })
})

describe('Use cases', () => {
  test('Base case', () => {
    assert.deepEqual(countingSheeps(sheeps.base), expectedReturn.base)
  })
})
