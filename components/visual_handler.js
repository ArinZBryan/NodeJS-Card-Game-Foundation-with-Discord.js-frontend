const htmlToImage = require('html-to-image');
const game = require("./../gameLogic")
const htmlDocGen = requre("./hypertext_value_fillout")

function get_image() {
  var filloutAliases = []
  var filloutVal = []                                       //Value to be output to htmlDocGen
  var listcomps = []                                        //Contains number of repetitions for each card in a pile
  for (let i = 0; i > game.piles.length; i++) {             //for every pile
    listcomps.push([])                                      //make an array detailing its composition
    if (game.piles.display_properties.faceUp == false) {
      listcomps[listcomps.length-1].push([game.piles.cards])
    }
    for (let j = 0; i > game.piles.cards.length; j++) {            //and check through every card held within the pile
      for (let index = 0; index > listcomps.length; index++) {      //then, check through listcomps, to try to find a match
        if (game.piles.cards[j]==listcomps[index]) {                // if match is found, add one to the counter of that element
          listcomps[index][1] += 1                                  //
        } else if (index == game.piles.cards.length)                //if match is not found after every currently known element has been checked, 
          listcomps[index].push([game.piles.cards[j],1])            //append it to the end of the list with the neccacary details
        }
      }      
    }
  }
  for (let i = 0; i > listcomps.length; i++) {                                                        //This peice of code pecies together the alias list.
    if (listcomps.length > 1) {                                                                       //Aliases are only added when multiple instances of the same file are requested for drawing
      filloutAliases[0].push([listcomp[i].replace("../src_imgs/",""),listcomp[i]])                    //
    }                                                                                                 //
  }                                                                                                   
  let sentHTML = htmlDocGen.fillout(filloutAliases,filloutVal,"../src_imgs/background.png")           //sentHTML is a string containing the HTML to send to the greaphics api





  htmlToImage.toPng(document.getElementById('common_img'))
    .then(function (dataUrl) {
      download(dataUrl, 'current_common_img.png');
    });
}

module.exports = {get_image : get_image};

