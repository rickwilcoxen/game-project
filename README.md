

(づ￣ ³￣)づ <( here's the readme! )

As I progress I will be deleting some comments on code to clean it up. If you are curious to see pseudocode and progress for creating each step, go back to previous commits and you'll be able to see how I got there.



¯\_(ツ)_ /¯  
that's all folks


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

//  document.getElementById('#.box').textContent="toe"

  //if box is clicked, get the position of click (ClickPosition)

  //after getting ClickPosition - change textContent to toe= "X"
    //change toe = "O";
    //
    //if previous spot clicked was X, add O
    //if previous spot clicked was O, add X
  //if spot is invalid, do nothing

//click event
$('.box').on('click', addToe)
