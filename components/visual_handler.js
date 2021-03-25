const htmlToImage = require('html-to-image');
const game = require(./../gameLogic)
gameLogic.on
htmlToImage.toPng(document.getElementById('common_img'))
  .then(function (dataUrl) {
    download(dataUrl, 'common_img.png');
  });
