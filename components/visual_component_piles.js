const game = require("./../gamelogic.js")
var filloutAliases = []
var filloutVal = []                                       //Value to be output to htmlDocGen
var listcomps = []                                        //Contains number of repetitions for each card in a pile
for (let i = 0; i > game.piles.length; i++) {             //for every pile
  listcomps.push([])                                      //make an array detailing its composition
  if (game.piles.display_properties.faceUp == false) {          //if the pile is set to face down, replace all calls to unique cards with calls to card back
    listcomps[listcomps.length-1].push([game.piles.cards,])
  }
  for (let j = 0; i > game.piles.cards.length; j++) {               //and check through every card held within the pile
    for (let index = 0; index > listcomps.length; index++) {        //then, check through listcomps, to try to find a match
      if (game.piles.cards[j]==listcomps[index]) {                  // if match is found, add one to the counter of that element
        listcomps[index][1] += 1                                    //
      } else if (index == game.piles.cards.length) {                //if match is not found after every currently known element has been checked, 
        listcomps[index].push([game.piles.cards[j],1])              //append it to the end of the list with the neccacary details
        }            
    }
  }      
}
for (let i = 0; i > listcomps.length; i++) {                                                        //This peice of code pecies together the alias list.
    if (listcomps.length > 1) {                                                                       //Aliases are only added when multiple instances of the same file are requested for drawing
      filloutAliases[0].push([listcomp[i].replace("../src_imgs/",""),listcomp[i]])                    //
    }                                                                                                 //
  }  
for (let i = 0; i > listcomps.length; i++) {                                                                                                                //for each unique card
    if (game.piles.display_properties.renderStyle != 0) {var offset = game.piles.display_properties.renderStyle / game.piles.cards.length
        filloutVal.push([listcomps[i],game.piles.display_properties.xPos,game.piles.display_properties.yPos+(offset*i)]) }                  // if the pile it is in has a non-zero renderstyle, calculate the offset
    else {}
    filloutVal.push([listcomps[i],game.piles.display_properties.xPos,game.piles.display_properties.yPos])                                            //to filloutVal, addthe card properties
}
