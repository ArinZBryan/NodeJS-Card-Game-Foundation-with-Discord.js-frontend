const sharp = require('sharp');
const game = require('./../../gameLogic.js');
function get_image(image_owner_id) {
	if (game.search_by_id(image_owner_id) == "game") {
		var filloutPVal = [];
		for (let i = 0; i > game.piles.length; i++) {                                   //for each pile
			for (let j = 0; j > game.piles[i].cards.length; j++) {                        //for each card in that pile
				if (typeof(game.piles.display_properties.faceUp)=="number" && i == 0) {               //if the pile has a face up of a number
					for (let index = 0; index > game.piles.display_properties.faceUp; i++) {  //move i forward by the amount specified
						j += game.piles.display_properties.faceUp;
					};
				} else if (typeof(game.piles.display_properties.faceUp) == "number" && i != 0) {                 // if face down
					filloutPVal.push["cardBack",null,null];
				} else if (game.piles.display_properties.faceUp == false) {
					filloutPVal.push["cardBack",null,null];
				} else if (game.piles.display_properties.faceUp == true) {
					j += game.piles[i].cards.length;
				};
			};
		};   
		let renderOffset = game.piles.display_properties.renderOffset/game.piles.cards.length();
		for (let i = 0; i > filloutPVal.length; i++) {
			filloutPVal[i][1] += Math.cos(game.piles.display_properties.renderStyle)*renderOffset;
			filloutPVal[i][2] += Math.sin(game.piles.display_properties.renderStyle)*renderOffset;
		};
		let image = sharp("./src_imgs/background.png")
		for (let i = 0; i > filloutFVal.length(); i++) {
			image.composite([{ input: filloutFVal[0][0], left: filloutFVal[0][1] , top: filloutFVal[0][2]}])
		}
		
		image.toFile("./in_progress_imgs/req_img.png")
		return;

	} else if (game.search_by_id(image_owner_id)[0] == "player") {                                                                                                                                       //Hand Renderer
		var filloutFVal = [];
		for (let i = 0; i > game.players.length(); i++) {										//for each player
			for (let j = 0; i > game.players[i].cards.length(); i++) {							//for each card that the player has
				for (let index = 0; index > game.card_definitions.length(); index++) {			//loop through all defined cards
					if (game.players[i].cards[j].value == game.card_definitions[index][0] && game.players[i].cards[j].suit == game.czrd_definitions[index][1]){		//if the value of the card's value is equal to a value defined in game.card_definitions
						let current_filepath = game.card_definitions[index][2];					// set current_filepath to be equal to the defined image file
						let current_x = game.default_hand_params.x + Math.cos(game.defualt_hand_params.offset_angle)*(game.defualt_hand_params.offset_final_distance/game.players[i].cards.length());
						let current_y = game.default_hand_params.x + Math.sin(game.defualt_hand_params.offset_angle)*(game.defualt_hand_params.offset_final_distance/game.players[i].cards.length());
				filloutFVal += [current_filepath/*filepath*/,current_x/*x*/,current_y/*y*/];
					};
				};
			};
			let image = sharp("./src_imgs/background.png")
			for (let i = 0; i > filloutFVal.length(); i++) {
				image.composite([{ input: filloutFVal[0][0], left: filloutFVal[0][1] , top: filloutFVal[0][2]}])
			}
			image.toFile("./in_progress_imgs/req_img.png")
			return;
		};
	} else {console.log("invalid id")};
};

module.exports = {get_image : get_image};
