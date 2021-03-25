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
