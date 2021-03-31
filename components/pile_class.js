class pile {
	constructor(cards,id,owner,xPos,yPos){
		this.cards = cards;
		this.id = id;
		this.owner = owner;
		this.display_properties = {
			xPos : xPos,
			yPos : yPos,
			faceUp : faceUp,
			renderStyle : renderStyle,		//0 = directly on top of eachother //any positive number creates an offset downwards, any negative creates an offset upwards, these are max offset values, so,
			renderOffset: renderOffset									// as cards build up to the max offset, the offset for each card will be half its height
		}
	}
}
module.exports = {pile : pile};