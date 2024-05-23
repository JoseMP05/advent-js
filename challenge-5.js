/*
Optimizing Santa's Trips
To not tire the reindeer, Papa Noel wants to leave the maximum number of gifts by making
the least number of trips possible.

He has an array of cities where each element is the number of gifts he can leave there.
For example, [12, 3, 11, 5, 7]. He also has a limit on the number of gifts that can
fit in his bag, and finally, the maximum number of cities that his reindeer can visit.

As he doesn't want to leave a city half-way, if he can't leave all the gifts that are
from that city, he doesn't leave any there.

Create a program that tells him the highest sum of gifts that he could distribute,
taking into account the maximum number of gifts and the maximum number of cities
he can visit.
*/

function getMaxGifts (giftsCities, maxGifts, maxCities) {
  const gifts = giftsCities.filter((gift) => gift <= maxGifts).sort((a, b) => b - a)
  let copy
  let resultados
  // function(numero){

  // }
  function recu(numero, array, max){
    let array2
    array = array.splice(1)
    if((numero + array[0]) > max){
      return numero
    }
    else if(array.length === 0){
      console.log(numero + array[0])
      array.push[numero]
      return numero
    }
    else{
      max = max - (numero + array[0])
      recu(numero + array[0], array.splice(1), max)
    }
  }
  let f = []
  for(let i = 0; i < gifts.length; i++){
    // First position == 12
    // let maxRestante = maxGifts - gifts[i]
    // // maxRestante == 8
    // // [3, 11, 5, 7, 25]
    // copy = gifts.filter((gift) => gift <= maxRestante)
    // copySize = copy.length//3
    //[7, 5, 3]
    f.push(recu(12, gifts, 20))
  }
  return f
}

const giftsCities = [12, 3, 11, 5, 7, 25]
const maxGifts = 20
const maxCities = 3

const callFunction = getMaxGifts(giftsCities, maxGifts, maxCities)

console.log(callFunction)
