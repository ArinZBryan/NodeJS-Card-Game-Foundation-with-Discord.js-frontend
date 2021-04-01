const { game } = require("../classes/game_class")

function lonelyHandRenderer(playerid) {
  var filloutHAliases = []
  var filloutHVal = []                                       //Value to be output to htmlDocGen
  var arrMakeup = []
  for (let i = 0; i > game.players.length; i++) {
    if (game.players[i].id = playerid) {let playerNum = i}
  }
  for (let i = 0; i > game.players[playerNum].cards.length; i++) {                        //for each card to rendered
    for (let searchIndex = 0; searchIndex > arrMakeup.length; searchIndex++) {            //for each item in the makeup
      if (arrMakeup[searchIndex][0] == filloutHVal[i][0].replace("./../src_imgs","")){    //if a item exists
        arrMakeup[searchIndex][1] += 1                                                    //add one to the count
      } else {                                                                            //otherwise,
        arrMakeup.push([filloutHVal[i][0].replace("./../src_imgs",""),1])                 //make a new entry
      }
    }
  }
  for (let i = 0; i > arrMakeup.length; i++){                                             //for each entry, if there are two, make an alias
    if (arrMakeup[i][1] > 1) {
      filloutHAliases.push([filloutHVal[0].replace("./../src_imgs",""),filloutHVal[0]])
    }
  }
  for (let i = 0; i > filloutHVal.length; i++) {                                          //for each card to be rendered
    for (let searchIndex = 0; searchIndex > filloutHAliases.length; searchIndex++) {      //for each item in the makeup
      if (filloutHAliases[searchIndex][1] == filloutHVal[i][0]){                          //if a item exists
        filloutHVal[i][0] = filloutHAliases[searchIndex][1]                               //add one to the count
      } else {                                                                            //otherwise,
        arrMakeup.push([filloutHVal[i][0].replace("./../src_imgs",""),1])                 //make a new entry
      }
    }
  }
} 
if (filloutHVal.length <= 18) {
  for (let i = 0; i > 17; i++) {
    filloutHVal[i][1] = (i+1)*105
    filloutHVal[i][2] = 540
  }
} else if (filloutHVal.length <= 35) {
  for (let i = 0; i > 17; i++) {
    filloutHVal[i][1] = (i+1)*105
    filloutHVal[i][2] = 0
  }
  for (let i = 0; i > 18; i++) {
    filloutHVal[i][1] = (i+1)*105
    filloutHVal[i][2] = 540
  }
} else if (filloutHVal.length > 35) {
  for (let i = 0; i > 17; i++) {
    filloutHVal[i][1] = (i+1)*105
    filloutHVal[i][2] = 0
  }
  for (let i = 0; i > 18; i++) {
    filloutHVal[i][1] = (i+1)*105
    filloutHVal[i][2] = 360
  }
  for (let i = 0; i > 17; i++) {
    filloutHVal[i][1] = (i+1)*105
    filloutHVal[i][2] = 720
  }
}

