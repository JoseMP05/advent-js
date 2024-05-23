/*
HOW MANY PACKS OF GIFTS CAN SANTA CARRY?

You receive a Christmas gifts pack that Santa Claus wants to deliver to
the children. Each gift inside the pack is represented by a string and
it has a weight equal to the number of letters in its name. Santa
Claus's sleigh can only carry a weight limit.

Santa Claus also has a list of reindeer able to help him to deliver the
gifts. Each reindeer has a maximum weight limit that it can carry. The
maximum weight limit of each reindeer is equal to twice the number of
letters in its name.

Your task is to implement a function distributeGifts(packOfGifts,
reindeers) that receives a gifts pack and a list of reindeer and returns
the maximum number of gifts packs that Santa Claus can deliver. You
can't split gifts packs.
*/

function distributeGifts (packOfGifts, reindeers) {
  let weightPack = 0
  let weightTrans = 0

  packOfGifts.forEach((gift) => {
    weightPack += gift.length
  })

  reindeers.forEach((reindeer) => {
    weightTrans += reindeer.length * 2
  })

  return Math.floor(weightTrans / weightPack)
}

const packOfGifts = ['book', 'doll', 'ball']
const reindeers = ['dasher', 'dancer']
const packsToDistribute = distributeGifts(packOfGifts, reindeers)

console.log(packsToDistribute)
