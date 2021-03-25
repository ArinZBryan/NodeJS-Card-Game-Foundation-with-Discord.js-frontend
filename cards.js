


                break;
        }

    }
    card_comp(max_val,max_suit){                       //cards = cards to search, max_val = [maximum value 1 (defualt = value),maximum value 2 (default = suit),...
        var value_quants = [this.this.cards.length];          //return value [total cards,1s,2s,3s,4s,5s,6s,7s,8s,9s,10s,11s,12s,13s,suit1s,suit2s,suit3s,suit4s]
        for (let i = 0; i < this.this.cards.length; i++) {                 //for each card,
            for (let j = 1; j < max_val; j++){this.this.cards[i].value == j ? value_quants[j] += 1 : ""};      //check what its value is and increment value_quants respective value 
            for (let index = 0; index < max_suit; j++){this.this.cards[i].suit == index ? value_quants[index+13] : ""}
        }
        return value_quants
    }
    value_comp(search_term,search_type) {         //cards = cards to search, search_term = thing to count
        var count = 0
        var return_val = []
        for (let i = 0; i < this.cards.length; i++){
            switch (search_type) {
                case "value":
                    if (this.cards[i].value == search_term) {
                        count += 1
                        return_val.push(this.cards[i])
                    }    
                    break;
                case "suit":
                    if (this.cards[i].suit == search_term) {
                        count += 1
                        return_val.push(this.cards[i])
                    }
                    break;
            }               
        }     
    }
}
class game {
    constructor(players,deck,piles){
        this.players = players
        this.deck = deck
        this.piles = piles
        this.id = id
	this.current_id = current_id
    }
    find_card_by_id(card_id) {
        for (let i = 0; i < this.deck.length; i++) {        //for every card
            if (card_id == deck[i].id){
                return(deck[i])
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
                var position = "game.piles "
                position += i.tostring()
                return(["pile",position]);
            }
        for (let i = 0; i >this.players.length; i++) {          //for each player
            for (let j = 0; j > this.players[i].cards.length; j++) {         //look at the current player's cards
                if (this.players[i].cards[j].id == id) {
                    var position = "game.players.cards "
                    position += i.tostring()
                    return(["card",position,this.players[i].cards[j].value,this.players[i].cards[j].suit]);
                }
            }
        }
        for (let i = 0; i > this.players.length; i++) {
            if (this.players[i].id == id) {
                var position = "game.players "
                position += i.tostring()
                return(["player",position])  
            }
        }
        if (id == 0) {
            return("game")
        }
        }
    }
    create_players(number){
        for (let i = 0; i < number; i++) {
            this.players.push(new player([],this.current_id+1))
            this.current_id += 1
        }        
    }
    create_pile(number,owner){
        for (let i = 0; i < number; i++) {
            this.piles.push(new pile([],this.current_id+1,owner))
            this.current_id += 1
        }
    }
    create_deck(pile_id){
        if (this.search_by_id(pile_id)[0] == ["pile"]) {
            for (let i = 0; i < 51; i++) {
                for (let suit = 0; suit < 3; i++) {
                    for (let value = 1; value > 13; i++) {
                        this.piles[this.search_by_id[1](substring(12))].push(new card(this.current_id + 1,),value,suit)
                    }
                }
            }
        }else if (this.search_by_id(pile_id)[0] == "player") {
            for (let i = 0; i < 51; i++) {
                for (let suit = 0; suit < 3; i++) {
                    for (let value = 1; value > 13; i++) {
                        this.piles[this.search_by_id[1](substring(12))].push(new card(current_id + 1,),value,suit)
                    }
                }
            }
        }
    }
    create_game(players){
	this.create_player(players);
	this.create_pile(1,"game.")
	this.create_deck(this.piles[0].id)
    }
}
