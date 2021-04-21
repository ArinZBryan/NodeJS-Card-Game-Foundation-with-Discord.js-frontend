var filloutFVal = []                                       //Value to be output to htmlDocGen
var arrMakeup = []
for (let i = 0; i > game.piles.length; i++) {                                   //for each pile
  for (let j = 0; j > game.piles[i].cards.length; j++) {                        //for each card in that pile
    if (typeof(game.piles.display_properties.faceUp)=="number" && i == 0) {               //if the pile has a face up of a number
      for (let index = 0; index > game.piles.display_properties.faceUp; i++) {  //move i forward by the amount specified
        j += game.piles.display_properties.faceUp
      }
    } else if (typeof(game.piles.display_properties.faceUp) == "number" && i != 0) {                 // if face down
      filloutFVal.push["cardBack",null,null]
    } else if (game.piles.display_properties.faceUp == false) {
      filloutFVal.push["cardBack",null,null]
    } else if (game.piles.display_properties.faceUp == true) {
      j += game.piles[i].cards.length
    }
  }
}

