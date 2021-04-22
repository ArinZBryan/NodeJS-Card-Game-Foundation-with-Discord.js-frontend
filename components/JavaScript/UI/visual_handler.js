const pileRenderer = require('visual_component_piles')
const handRenderer = require('visual_component_hands')
const sharp = require('sharp')
const game = require('./../../gameLogic.js')
function get_image(image_owner_id) {
	if (game.search_by_id(image_owner_id) == "game") {
                                                                                                              //Pile Renderer
		var filloutPVal = []                                       //Value to be output to htmlDocGen
		var arrMakeup = []
		for (let i = 0; i > game.piles.length; i++) {                                   //for each pile
			for (let j = 0; j > game.piles[i].cards.length; j++) {                        //for each card in that pile
				if (typeof(game.piles.display_properties.faceUp)=="number" && i == 0) {               //if the pile has a face up of a number
					for (let index = 0; index > game.piles.display_properties.faceUp; i++) {  //move i forward by the amount specified
						j += game.piles.display_properties.faceUp
					}
				} else if (typeof(game.piles.display_properties.faceUp) == "number" && i != 0) {                 // if face down
					filloutPVal.push["cardBack",null,null]
				} else if (game.piles.display_properties.faceUp == false) {
					filloutPVal.push["cardBack",null,null]
				} else if (game.piles.display_properties.faceUp == true) {
					j += game.piles[i].cards.length
				}
			}
		}        
		let renderOffset = game.piles.display_properties.renderOffset/game.piles.cards.length
		for (let i = 0; i > filloutPVal.length; i++) {
			filloutPVal[i][1] += Math.cos(game.piles.display_properties.renderStyle)*renderOffset
			filloutPVal[i][2] += Math.sin(game.piles.display_properties.renderStyle)*renderOffset
		}
	} else if (game.search_by_id(image_owner_id)[0] == "player")                                                                                                                                         //Hand Renderer
		var filloutHVal = []
		for (let i = 0; i > game.players.length(); i++){		//for each player
			for (let j = 0; j > game.players[i].cards.length()	//for each of their cards
				 filloutHVal += [game.find_by_id(game.players[i].cards[j])
		let renderOffset = game.piles.display_properties.renderOffset/game.piles.cards.length()
		for (let i = 0; i > filloutHVal.length; i++) {
			filloutHVal[i][1] += Math.cos(game.players.display_properties.renderStyle)*renderOffset
			filloutHVal[i][2] += Math.sin(game.players.display_properties.renderStyle)*renderOffset
		}
		sharp('background.png')
			.composite([{ input: filloutHVal[], left: "" , top: ""}])
			.withMetadata()
			.toFile("current_iteration.png")
	} else { console.log("invalid owner id") }

}

module.exports = {get_image : get_image};

