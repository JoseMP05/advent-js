export default function contains (almacen, producto) {
  let flatting = Object.values(almacen)
  let moreDeeply = true

  while (moreDeeply) {
    moreDeeply = false
    for (let i = 0; i < flatting.length; i++) {
      if (typeof flatting[i] === 'object' && !Array.isArray(flatting[i])) {
        moreDeeply = true
        flatting[i] = Object.values(flatting[i])
      }
    }
    flatting = flatting.flat()
  }

  return flatting.indexOf(producto) !== -1
}
