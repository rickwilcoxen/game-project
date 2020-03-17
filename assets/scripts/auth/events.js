'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui')

let toe = 'x'
//create an empty board in js
let board = [
  '', '', '',
  '', '', '',
  '', '', ''
]

//create a way to keep track of current player
let player = 'Player 1'

  const addToe = function(event){
    const clickPosition = event.target.id

    //spot is the text(x or o) on div
    console.log(toe + clickPosition)
    const spot = $(event.target).text()

    //once position is found, log X or O in spot
    if(spot !== 'x' && spot !== 'o' ) {
      $(event.target).text(toe)
      board[clickPosition] = toe

      //change turn
      if (toe === 'x') {
      toe = 'o'
      } else {
      toe = 'x'
    }
  }

  //check winner
  winToes()


  }

//check board[0] for winner
const winToes = function(event) {
  console.log(board)

  //top row
  if (board[0] === board[1] && board[0] === board[2] && board[0] !==''){
    console.log('winner!'+board[0])


    //middle row
  } else if (board[3] === board[4] && board[3] === board[5] && board[3] !==''){
    console.log('winner!'+ board[3])

    //bottom row
  } else if (board[6] === board[7] && board[6] === board[8] && board[6] !==''){
    console.log('winner!'+ board[6])

    //left column
  } else if (board[0] === board[3] && board[0] === board[6] && board[0] !==''){
    console.log('winner!'+ board[0])

    //middle column
  } else if (board[1] === board[4] && board[1] === board[7] && board[1] !=='') {
    console.log('winner!'+board[1])

    //right column
  } else if (board[2] === board[5] && board[2] === board[8] && board[2] !=='') {
    console.log('winner!'+ board[2])

    //left diagonal
  }else if (board[0] === board[4] && board[0] === board[8] && board[0] !=='') {
    console.log('winner!'+ board[0])

    //right diagonal
} else if (board[2] === board[4] && board[2] === board[6] && board[2] !=='') {
  console.log('winner!'+ board[2])
}
  else {
    console.log('loser')
  }
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Signing up')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Signing in')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Changed password')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}


const onSignOut = function (event) {
  event.preventDefault()
  console.log('Signed out')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}



const signInCheck = function (event){
  if (ui.signInSuccess === true) {
    
  }
}
module.exports = {
  addToe,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
