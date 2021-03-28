const game = require("./components/game_class.js");
const card = require("./components/card_class.js");
const pile = require("./components/pile_class.js");
const player = require("./components/pile_class.js");
let game = new game();
module.exports = {
    game:game,
    card:card,
    pile:pile,
    player:player
};
