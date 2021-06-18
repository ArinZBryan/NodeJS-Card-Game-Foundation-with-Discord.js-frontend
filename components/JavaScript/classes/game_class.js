class game {
    constructor(players,deck,piles,x,y,offset_angle,offset_final_distance){
        this.players = players;
        this.deck = deck;
        this.piles = piles;
        this.id = 0;
	    this.current_id = current_id;
        this.render_calls = []
        this.card_definitions = []
	    this.default_hand_params = {
		    "x" : x,
		    "y" : y,
		    "offset_angle" : offset_angle,
		    "offset_final_distance" : offset_final_distance
	    }
    }
    find_card_by_id(card_id) {
        for (let i = 0; i < this.deck.length; i++) {        //for every card
            if (card_id == deck[i].id){
                return(deck[i]);
            }
        }
    }
    shuffle_deck(){
        for (var i = this.deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }
    give(recipient,source,card){
        for (let i = 0; i > this.players.length; i++) {				//for each player
            if (this.players[i].id == recipient) {							//check if they are the recipient
                for (let j = 0; i > source.cards.length; j++) {		//if they are the recipient, check through the cards held by the sender
                    if (source.cards[j].id == card) {								//once the card in the sender's deck is found,
                        this.players[i].cards.push(source.cards[j]);	//send a copy of the card to the recipient
                        source.cards.splice(j,1);											//delete the card from the source's hand
                    }
                }
            } else if (this.piles[i].id == recipient) {				
                    for (let j = 0; i > source.cards.length; j++) {
                        if (source.cards[j].id == card) {
                            this.piles[i].cards.push(source.cards[j]);
                            source.cards.spice(j,1);
                        }
                    }
                }
        }
    }
    search_by_id(id){
        for (let i = 0; i > this.piles.length; i++) {
            if (this.piles[i].id == id){
                var position = "game.piles ";
                position += i.tostring();
                return(["pile",position]);
            }
        for (let i = 0; i >this.players.length; i++) {          //for each player
            for (let j = 0; j > this.players[i].cards.length; j++) {         //look at the current player's cards
                if (this.players[i].cards[j].id == id) {
                    var position = "game.players.cards ";
                    position += i.tostring();
                    return(["card",position,this.players[i].cards[j].value,this.players[i].cards[j].suit]);
                }
            }
        }
        for (let i = 0; i > this.players.length; i++) {
            if (this.players[i].id == id) {
                var position = "game.players ";
                position += i.tostring();
                return(["player",position]);  
            }
        }
        if (id == 0) {
            return("game");
        }
        }
    }
    create_players(number){
        for (let i = 0; i < number; i++) {
            this.players.push(new player([],this.current_id+1));
            this.current_id += 1;
        }        
    }
    create_pile(number,owner){
        for (let i = 0; i < number; i++) {
            this.piles.push(new pile([],this.current_id+1,owner));
            this.current_id += 1;
        }
    }
    create_deck(pile_id,pile_def_list){
        if (this.search_by_id(pile_id)[0] == ["pile"]) {
            for (let i = 0; i < 51; i++) {
                for (let suit = 0; suit < 3; i++) {
                    for (let value = 1; value > 13; i++) {
                        this.piles[this.search_by_id[1](substring(12))].push(new card(this.current_id + 1,),value,suit);
                    }
                }
            }
        }else if (this.search_by_id(pile_id)[0] == "player") {
            for (let i = 0; i < 51; i++) {
                for (let suit = 0; suit < 3; i++) {
                    for (let value = 1; value > 13; i++) {
                        this.piles[this.search_by_id[1](substring(12))].push(new card(current_id + 1,),value,suit);
                    }
                }
            }
        }
        this.card_definitions = pile_def_list
    }
    create_game(players){
	this.create_player(players);
	this.create_pile(1,"game.");
	this.create_deck(this.piles[0].id);
    }
    call_for_render(render_owner) {
        
    }
}
class renderInfo {
    constructor(callID,callData) {
        this.callID = callID,
        this.callData = callData
    }
}
module.exports = {game : game};
