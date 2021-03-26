class card {                                        //Card Blueprint
    constructor(id,value,suit){
        this.id = id;                               //Each card has an integer id counting from 0 assigned to it when first created
        this.value = value;                         //Each card has a value. This is an integer, and thus can be interpreted with 'if's to make a text value
        this.suit = suit;                           //Each card has a suit. This is also an int, and functions identicallly to value.
    }
}
module.exports = {card : card};