// sum.test.js
import { describe, expect, test } from 'vitest'
import { sum } from './learning'

test.skip('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

// Learning test driven development

/* Escribir una función que al pasarle un número:
  - muestra "fizz" si es multiplo de 3.
  - muestra "buzz" si es múltiplo de 5.
  - muestra "fizzbuzz" si es múltiplo de 3 y 5
  - muestra el número si no es el múltiplo de ninguno de los anterires
*/

// Con describe agrupamos un conjunto de tests

const fizzbuzz = function (number) {
  if (typeof number !== 'number') throw new Error('parameter provided must be a number')
}

describe('fizzbuzz', () => {
  test('should be a function', () => {
    expect(fizzbuzz).toBeTypeOf('function')
  })

  test('should throw error if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  test('should throw an specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow('parameter provided must be a number')
  })
})
