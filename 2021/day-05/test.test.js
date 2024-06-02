import { describe, test, expect, assert } from 'vitest'

import countDays from './solution'

const daysToXmas = {
  case_1: {
    input: new Date('Dec 1, 2021'),
    output: 24
  },
  case_2: {
    input: new Date('Dec 24, 2021 00:00:01'),
    output: 1
  },
  case_3: {
    input: new Date('Dec 24, 2021 23:59:59'),
    output: 1
  },
  case_4: {
    input: new Date('December 20, 2021 03:24:00'),
    output: 5
  },
  case_5: {
    input: new Date('Dec 25, 2021'),
    output: 0
  },
  case_6: {
    input: new Date('Dec 26, 2021'),
    output: -1
  },
  case_7: {
    input: new Date('Dec 31, 2021'),
    output: -6
  },
  case_8: {
    input: new Date('Jan 1, 2022 00:00:01'),
    output: -7
  },
  case_9: {
    input: new Date('Jan 1, 2022 23:59:59'),
    output: -7
  }
}

describe('countDays', () => {
  test('should throw error if the parameter is not provided', () => {
    expect(() => countDays()).toThrowError()
  })

  test('should throw error if the parameter is not a date instance', () => {
    expect(() => countDays('Dec 1, 2021')).toThrowError('Parameter must be date instance')
  })

  test('should throw error if the parameter is not a valid date', () => {
    expect(() => countDays(new Date('No Valid'))).toThrowError('Invalid Date')
  })

  test('should return 0 if the date is Dec 25', () => {
    expect(countDays(new Date('Dec 25, 2021'))).toBe(0)
  })

  test('should return a negative number if the date is next to Dec 25', () => {
    expect(countDays(new Date('Dec 31, 2021'))).toBeLessThan(0)
  })

  test('should return a positive number if the date is previous to Dec 25', () => {
    expect(countDays(new Date('December 20, 2021 03:24:00'))).toBeGreaterThan(0)
  })
})

describe('countDays', () => {
  test('Case 1', () => {
    assert.equal(countDays(daysToXmas.case_1.input), daysToXmas.case_1.output)
  })

  test('Case 2', () => {
    assert.equal(countDays(daysToXmas.case_2.input), daysToXmas.case_2.output)
  })

  test('Case 3', () => {
    assert.equal(countDays(daysToXmas.case_3.input), daysToXmas.case_3.output)
  })

  test('Case 4', () => {
    assert.equal(countDays(daysToXmas.case_4.input), daysToXmas.case_4.output)
  })

  test('Case 5', () => {
    assert.equal(countDays(daysToXmas.case_5.input), daysToXmas.case_5.output)
  })

  test('Case 6', () => {
    assert.equal(countDays(daysToXmas.case_6.input), daysToXmas.case_6.output)
  })

  test('Case 7', () => {
    assert.equal(countDays(daysToXmas.case_7.input), daysToXmas.case_7.output)
  })

  test('Case 8', () => {
    assert.equal(countDays(daysToXmas.case_8.input), daysToXmas.case_8.output)
  })

  test('Case 9', () => {
    assert.equal(countDays(daysToXmas.case_9.input), daysToXmas.case_9.output)
  })
})
