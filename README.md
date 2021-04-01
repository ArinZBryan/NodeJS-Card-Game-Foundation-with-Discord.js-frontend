# NodeJS-Card-Game-Foundation-with-Discord.js-frontend
It does what it says on the tin.


Coming soon:
  automatic searching for commonly used card patterns (runs, multiple of a kind)
  everthing has an id, not just cards
  move cards between players and piles
  piles
  
Coming Eventually:
  The discord.js frontend.
  
Setup:
  Cards must be supplied as images, in *.png, in the size 110px*360px

To set up a game:
  game = new game()
  game.new_player(number of players wanted)
  game.new_pile(1)
  game.new_deck(game.piles[0].id)

to sort cards
  game.players[game.find_by_id(player's id)].sortDeck(method)
  
  methods are:
    "pure-numerical-ascending"
    "pure-numerical-descending"
    "by-suit"
    "ascending-numerical-by-suit"
    "descending-numerical-by suit"
    
 to find an game element by its id:
    game.find_by_id(id)
    returns [type,parent,value (if card),suit (if card)]
    types:  "card"
            "pile"
            "player"

values for standard playing cards:
  1:  ace
  2:  1
  3:  2
  4:  3
  5:  4
  6:  5
  7:  6
  8:  7
  9:  8
  10: 9
  11: 10
  12: jack
  13: queen
  14: king
