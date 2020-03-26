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


  const addToe = function(event){
    const clickPosition = event.target.id

    //spot is the text(x or o) on div
    //console.log(toe + clickPosition)
    const spot = $(event.target).text()

    //once position is found, log X or O in spot
    if(spot !== 'x' && spot !== 'o' ) {
      $(event.target).text(toe)
      board[clickPosition] = toe
      document.getElementById('error').style.display = 'none';
      //change turn
      if (toe === 'x') {
        document.getElementById('viewO').style.display = 'block';
        document.getElementById('viewX').style.display = 'none';
      toe = 'o'
      } else {
        document.getElementById('viewX').style.display = 'block';
        document.getElementById('viewO').style.display = 'none';
      toe = 'x'
    }
  }
  else {
    document.getElementById('error').style.display = 'block';

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
  } else if (board[0] === board[4] && board[0] === board[8] && board[0] !=='') {
    console.log('winner!'+ board[0])

    //right diagonal
  } else if (board[2] === board[4] && board[2] === board[6] && board[2] !=='') {
    console.log('winner!'+ board[2])
}
  else {
    console.log('A draw!')
  }
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Signing up')
  const data = getFormFields(event.target)
  document.getElementById("sign-up").reset()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Signing in')
  const data = getFormFields(event.target)
  document.getElementById("sign-in").reset()
//    document.getElementById('sign-out').style.display = 'block'
//    document.getElementById('sign-in').style.display = 'none'
//    document.getElementById('change-pw').style.display = 'block'
//    document.getElementById('sign-up').style.display = 'none'
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
    document.getElementById('sign-in').style.display = 'block'
    document.getElementById('sign-up').style.display = 'block'
    document.getElementById('sign-out').style.display = 'none'
    document.getElementById('change-pw').style.display = 'none'
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
//const newGameButton = document.createElement("button");
const onNewGame = function (event) {
  event.preventDefault()
  console.log('New game start')
  //const data = getFormFields(event.target)
  document.getElementById('the game').style.display = 'block'
  api.newGameStart()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}


//const viewLogOut = function (event){
//  if (ui.signInSuccess === true) {
//    document.getElementById('sign-out').style.display = 'block';
//    document.getElementById('sign-in').style.display = 'none';
//    document.getElementById('change-pw').style.display = 'block';
//    document.getElementById('sign-up').style.display = 'none';
//  }
//  else if(ui.signOutSuccess === true ) {
//    document.getElementById('sign-out').style.display = 'none';
//    document.getElementById('sign-in').style.display = 'block';
//    document.getElementById('change-pw').style.display = 'none';
//    document.getElementById('sign-up').style.display = 'block';
//  }
//}


module.exports = {
  addToe,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame
}
