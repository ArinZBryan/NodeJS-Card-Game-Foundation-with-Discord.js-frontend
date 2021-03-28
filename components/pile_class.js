class pile {
	constructor(cards,id,owner,xPos,yPos){
		this.cards = cards;
		this.id = id;
		this.owner = owner;
		this.display_properties = {
			xPos : xPos,
			yPos : yPos,
			faceUp : faceUp
		}
	}
}
module.exports = {pile : pile};