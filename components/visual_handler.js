const htmlToImage = require('html-to-image');
const game = require("./../gameLogic")
const htmlDocGen = requre("./hypertext_value_fillout")

function get_image() {
  
  htmlToImage.toPng(document.getElementById('common_img'))
    .then(function (dataUrl) {
      download(dataUrl, 'common_img.png');
    });
}

module.exports = {get_image : get_image};

