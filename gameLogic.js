const game = require("./components/game_class.js");
let game = new game();
module.exports = {
    game:game,
    card:card,
    pile:pile,
    player:player,
    elementsToRender:elementsToRender
};
