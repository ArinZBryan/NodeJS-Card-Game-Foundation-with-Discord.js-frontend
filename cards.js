class card {                                        //Card Blueprint
    constructor(id,value,suit){
        this.id = id;                               //Each card has an integer id counting from 0 assigned to it when first created
        this.value = value;                         //Each card has a value. This is an integer, and thus can be interpreted with 'if's to make a text value
        this.suit = suit;                           //Each card has a suit. This is also an int, and functions identicallly to value.
    }
}
class player {                                      //Blueprint for a player
    constructor(cards,id){
        this.cards = cards
        this.id = id
    }               //By defualt, the only variable that the player has is a list of cards, functioning as their deck. However, more can be added
    sortDeck(method){                         //This functon of the player class can sort the cards of the player in several methods
        switch (method) {
            case "pure-numerical-ascending":        //This method groups the values of cards together in ascending order and can produce odd patterns of suits (uses bubble sort)
                var sorted = []
                for (let index = 0; index < this.cards.length; index++) {sorted.push([this.cards[index].value,this.cards[index].id])} //reduces the values held in each card to an array, [value,id]
                    var len = sorted.length;                                                                           //length of hand
                    for (var i = len-1; i>=0; i--){  
                      for(var j = 1; j<=i; j++){
                        if(sorted[j-1][0]>sorted[j][0]){
                            var temp = sorted[j-1][0];
                            sorted[j-1][0] = sorted[j][0];
                            sorted[j][0] = temp;
                        }
                    }
                }
                for (let i = 0; i < this.cards.length; i++) {            //Takes values in 'sorted'  //for each card
                    for (let j = 0; j < sorted.length; j++) {                                    //searches through sorted cards
                        if (this.cards[i].id == sorted[j][1]) {                                      //if id matches
                            this.cards.splice(j,0,this.cards[i])                                          //take the current card to be searched, move it to position j, and don't delete shit
                            this.cards.splice(i,1)                                                   //delete original card, leaving
                        }
                    }
                };
                break;
            case "pure-numerical-descending":   //This method groups the values of cards together in descending order and can produce odd patterns of suit
                var sorted = []
                for (let index = 0; index < this.cards.length; index++) {sorted.push([this.cards[index].value,this.cards[index].id])}
                    var len = sorted.length;
                    for (var i = len-1; i>=0; i--){
                        for(var j = 1; j<=i; j++){
                            if(sorted[j-1][0]>sorted[j][0]){
                                var temp = sorted[j-1][0];
                                sorted[j-1][0] = sorted[j][0];
                                sorted[j][0] = temp;
                            }
                        }
                    }
                sorted.reverse()
                for (let i = 0; i < this.cards.length; i++) {            //Takes values in 'sorted'  //for each card
                    for (let j = 0; j < sorted.length; j++) {                                    //searches through sorted cards
                        if (this.cards[i].id == sorted[j][1]) {                                      //if id matches
                            this.cards.splice(j,0,this.cards[i])                                          //take the current card to be searched, move it to position j, and don't delete shit
                            this.cards.splice(i,1)                                                   //delete original card, leaving
                        }
                    }
                };
                break;

            case "in-suits":                    //This method groups together suits and can produce odd orders of values
                var sorted = []
                for (let index = 0; index < this.cards.length; index++) {sorted.push([this.cards[index].suit,this.cards[index].id])}
                    var len = sorted.length;
                    for (var i = len-1; i>=0; i--){
                        for(var j = 1; j<=i; j++){
                            if(sorted[j-1][0]>sorted[j][0]){
                                var temp = sorted[j-1][0];
                                sorted[j-1][0] = sorted[j][0];
                                sorted[j][0] = temp;
                            }
                        }
                    }
                for (let i = 0; i < this.cards.length; i++) {            //Takes values in 'sorted'  //for each card
                    for (let j = 0; j < sorted.length; j++) {                                    //searches through sorted cards
                        if (this.cards[i].id == sorted[j][1]) {                                      //if id matches
                            this.cards.splice(j,0,this.cards[i])                                          //take the current card to be searched, move it to position j, and don't delete shit
                            this.cards.splice(i,1)                                                   //delete original card, leaving
                        }
                    }
                }
                break;
            case "ascending-when-in-suits":     //This method groups togther suits and then orders the cards by value of suit within in ascending order
                var sorted = []
                for (let index = 0; index < this.cards.length; index++) {sorted.push([this.cards[index].suit,this.cards[index].id])}
                    var len = sorted.length;
                    for (var i = len-1; i>=0; i--){
                        for(var j = 1; j<=i; j++){
                            if(sorted[j-1][0]>sorted[j][0]){
                                var temp = sorted[j-1][0];
                                sorted[j-1][0] = sorted[j][0];
                                sorted[j][0] = temp;
                            }
                        }
                    }
                for (let i = 0; i < this.cards.length; i++) {            //Takes values in 'sorted'  //for each card
                    for (let j = 0; j < sorted.length; j++) {                                    //searches through sorted cards
                        if (this.cards[i].id == sorted[j][1]) {                                      //if id matches
                        this.cards.splice(j,0,this.cards[i])                                          //take the current card to be searched, move it to position j, and don't delete shit
                        this.cards.splice(i,1)                                                   //delete original card, leaving
                        }
                    }
                }
                break;
            case "descending-when-in-suits":    //This method groups togther suits and then orders the cards by value of suit within in descending order
                var sorted = []
                for (let index = 0; index < this.cards.length; index++) {sorted.push([this.cards[index].suit,this.cards[index].id])}
                    var len = sorted.length;
                    for (var i = len-1; i>=0; i--){
                        for(var j = 1; j<=i; j++){
                            if(sorted[j-1][0]>sorted[j][0]){
                                var temp = sorted[j-1][0];
                                sorted[j-1][0] = sorted[j][0];
                                sorted[j][0] = temp;
                            }
                        }
                    }
                for (let i = 0; i < this.cards.length; i++) {            //Takes values in 'sorted'  //for each card
                    for (let j = 0; j < sorted.length; j++) {                                    //searches through sorted cards
                        if (this.cards[i].id == sorted[j][1]) {                                      //if id matches
                        this.cards.splice(j,0,this.cards[i])                                          //take the current card to be searched, move it to position j, and don't delete shit
                        this.cards.splice(i,1)                                                   //delete original card, leaving
                        }
                    }
                }
                this.cards.reverse()
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
            this.players.push(new player([],current_id+1))
            current_id += 1
        }        
    }
    create_pile(number,owner){
        for (let i = 0; i < number; i++) {
            this.piles.push(new pile([],current_id+1,owner))
            current_id += 1
        }
    }
    create_deck(pile_id){
        if (this.search_by_id(pile_id)[0] == ["pile"]) {
            for (let i = 0; i < 51; i++) {
                for (let suit = 0; suit < 3; i++) {
                    for (let value = 1; value > 13; i++) {
                        this.piles[this.search_by_id[1](substring(12))].push(new card(current_id + 1,),value,suit)
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
class pile {
	constructor(cards,id,owner){
		this.cards = cards
		this.id = id
		this.owner = owner
	}
}
var current_id = 0
