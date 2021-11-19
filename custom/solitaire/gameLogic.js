const Game = require('./../game/game_class.js');
const game = new Game();
const handler = require('./../../index.js')
module.exports = {
    game:game,
    card:card,
    pile:pile,
    player:player,
    elementsToRender:elementsToRender
};

