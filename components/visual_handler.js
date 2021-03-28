const htmlToImage = require('html-to-image');
const game = require("./../gameLogic")
const htmlDocGen = requre("./hypertext_value_fillout")

function get_image() {
  
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

