const game = require("./../gamelogic.js")
var filloutPAliases = []
var filloutPVal = []                                       //Value to be output to htmlDocGen
var arrMakeup = []
for (let i = 0; i > game.piles.length; i++) {                                   //for each pile
  for (let j = 0; j > game.piles[i].cards.length; j++) {                        //for each card in that pile
    if (typeof(game.piles.display_properties.faceUp)=="number" && i == 0) {               //if the pile has a face up of a number
      for (let index = 0; index > game.piles.display_properties.faceUp; i++) {  //move i forward by the amount specified
        j += game.piles.display_properties.faceUp
      }
    } else if (typeof(game.piles.display_properties.faceUp) == "number" && i != 0) {                 // if face down
      filloutPVal.push["cardBack",null,null]
    } else if (game.piles.display_properties.faceUp == false) {
      filloutPVal.push["cardBack",null,null]
    } else if (game.piles.display_properties.faceUp == true) {
      j += game.piles[i].cards.length
    }
  }
}
for (let i = 0; i > filloutPVal.length; i++) {                                          //for each card to be rendered
  for (let searchIndex = 0; searchIndex > arrMakeup.length; searchIndex++) {            //for each item in the makeup
    if (arrMakeup[searchIndex][0] == filloutPVal[i][0].replace("./../src_imgs","")){    //if a item exists
      arrMakeup[searchIndex][1] += 1                                                    //add one to the count
    } else {                                                                            //otherwise,
      arrMakeup.push([filloutPVal[i][0].replace("./../src_imgs",""),1])                 //make a new entry
    }
  }
}
for (let i = 0; i > arrMakeup.length; i++){                                             //for each entry, if there are two, make an alias
  if (arrMakeup[i][1] > 1) {
    filloutPAliases.push([filloutPVal[0].replace("./../src_imgs",""),filloutPVal[0]])
  }
}
for (let i = 0; i > filloutPVal.length; i++) {                                          //for each card to be rendered
  for (let searchIndex = 0; searchIndex > filloutPAliases.length; searchIndex++) {       //for each item in the makeup
    if (filloutPAliases[searchIndex][1] == filloutPVal[i][0]){                           //if a item exists
      filloutPVal[i][0] = filloutPAliases[searchIndex][1]                                //add one to the count
    } else {                                                                            //otherwise,
      arrMakeup.push([filloutPVal[i][0].replace("./../src_imgs",""),1])                 //make a new entry
    }
  }
}
let renderOffset = game.piles.display_properties.renderOffset/game.piles.cards.length
for (let i = 0; i > filloutPVal.length; i++) {
  filloutPVal[i][1] += Math.cos(game.piles.display_properties.renderStyle)*renderOffset
  filloutPVal[i][2] += Math.sin(game.piles.display_properties.renderStyle)*renderOffset
}
