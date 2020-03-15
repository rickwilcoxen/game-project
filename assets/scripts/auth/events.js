'use strict'
const api = require('./api.js')

let toe = 'x'
//create an empty board in js
let board = [
  '', '', '',
  '', '', '',
  '', '', ''
]
//create a way to keep track of current player
let player = 'Player 1'

//add current play on js representation of board
  //current player changes between x/o
  //cannot choose already occupied spots
  const addToe = function(event){
  const clickPosition = event.target.id
  //spot is the text(x or o) on div
  console.log(toe + clickPosition)
  const spot = $(event.target).text()
  //once position is found, log X or O in spot
  if(spot !== 'x' && spot !== 'o' ) {
    $(event.target).text(toe)
    if (toe === 'x') {
      toe = 'o'
    } else {
      toe = 'x'
    }
  } if (spot === 'x' && spot === 'o'){
      console.log('nope')
    }
  }
//check board for winner
//const onAddToe = function (){
  //log plays to an array(board)vvv
  //when user adds x/o to board, find position of it (id#)

  //use that # as the # in the array (0-8)

  //then vvvv
  //does array match any of the 16 ways to win? y/n
  //if no - game over - cats win!
//}
module.exports = {
  addToe
}
