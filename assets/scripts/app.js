'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
//toe = either x || o
let toe = 'x'

  //get the position of the click & add x or o
  const addToe=function(event){
  const clickPosition = event.target.id

  //if box A is clicked, console logs A+positionID
  //spot is the text(x or o) on div
  console.log(toe + clickPosition)
  const spot = $(event.target).text()

  //once position is found, log X or O in text
  if(spot !== 'x' || 'o' ) {
    $(event.target).text(toe)

  } //else if (event.target === 'x')
    if (toe === 'x') {
      toe = 'o'
    } else {
      //if (toe === 'o')
      toe = 'x'
    } //if spot is occupied dont put x or o! /turn off click
     if (spot === 'x' || 'o') {
     console.log('nope') //still changes even if invalid
  //  $('.box' ).off('click')
    }
  }
//  document.getElementById('#.box').textContent="toe";




  //if box is clicked, get the position of click (ClickPosition)

  //after getting ClickPosition - change textContent to toe= "X"
    //change toe = "O";
    //
    //if previous spot clicked was X, add O
    //if previous spot clicked was O, add X
  //if spot is invalid, do nothing

//click event
$('.box').on('click', addToe)

})
