/*
BOX INSIDE A BOX AND ANOTHER...

Santa Claus needs to review his gift boxes to make sure he can pack them
all in his sleigh. He has a series of boxes of different sizes,
characterized by their length, width, and height.

Your task is to write a function that, given a list of boxes with their
sizes, determines whether it is possible to pack all the boxes in one
so that each box contains another (which in turn contains another, and so on).

Each box represents its measures with an object. For example:
{l: 2, w: 3, h: 2}. This means that the box has a length of 2, a width
of 3 and a height of 2.

A box fits into another box if all the sides of the first are smaller
than the sides of the second. The elves have told us that the boxes
cannot be rotated, so you cannot put a box of 2x3x2 in a box of 3x2x2.
Let's see some examples:

*/
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
  { l: 4, w: 4, h: 4 },
  { l: 5, w: 5, h: 5 }
]

function fitsInOneBox (boxes) {
  for (let i = 0; i < boxes.length; i++) {
    for (let k = 0; k < boxes.length; k++) {
      if (i === k) continue
      if (
        boxes[i].l < boxes[k].l &&
        boxes[i].w < boxes[k].w &&
        boxes[i].h < boxes[k].h
      ) {
        continue
      } else if (
        boxes[i].l > boxes[k].l &&
        boxes[i].w > boxes[k].w &&
        boxes[i].h > boxes[k].h
      ) {
        continue
      } else {
        return false
      }
    }
  }
  return true
}

console.log(fitsInOneBox(boxes))
