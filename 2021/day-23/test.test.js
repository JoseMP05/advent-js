import { describe, expect, test } from 'vitest'
import canReconfigure from './solution'

describe('canReconfigure', () => {
  test('should be a function', () => {
    expect(canReconfigure).toBeTypeOf('function')
    // Se verifica es que tipo de dato es canReconfigure, pues no se está llamando
  })

  test('should throw error if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrowError()
  })

  test('should throw error if first parameter is not string', () => {
    expect(() => canReconfigure(2)).toThrowError('From must be string')
  })

  test('should throw error if second parameter is missing', () => {
    expect(() => canReconfigure('a')).toThrow()
  })

  test('should return a boolean', () => {
    expect(canReconfigure('first string', 'second string')).toBeTypeOf('boolean')
    // Se verifica el tipo de dato que retorna la función, pues aquí si se llama
  })

  test('should return false if strings provided have different length', () => {
    expect(canReconfigure('abv', 'asds')).toBe(false)
  })

  test('should return false if string provided have different number of unique letter', () => {
    expect(canReconfigure('abc', 'uuj')).toBe(false)
  })

  test('should return false if strings has different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
