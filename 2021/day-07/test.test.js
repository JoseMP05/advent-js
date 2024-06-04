import { describe, test, assert } from 'vitest'

import contains from './solution'

const products = {
  camiseta: {
    input: {
      estanteria1: {
        cajon1: {
          producto1: 'coca-cola',
          producto2: 'fanta',
          producto3: 'sprite'
        }
      },
      estanteria2: {
        cajon1: 'vacio',
        cajon2: {
          producto1: 'pantalones',
          producto2: 'camiseta' // <- ¡Está aquí!
        }
      }
    },
    output: true
  },

  gameboy: {
    input: {
      baul: {
        fondo: {
          objeto: 'cd-rom',
          'otro-objeto': 'disquette',
          'otra-cosa': 'mando'
        }
      }
    },
    output: false
  }
}

describe('searchProduct', () => {
  test('camiseta', () => {
    assert.deepEqual(contains(products.camiseta.input, Object.keys(products)[0]), products.camiseta.output)
  })

  test('gameboy', () => {
    assert.deepEqual(contains(products.gameboy.input, Object.keys(products)[1]), products.gameboy.output)
  })
})
