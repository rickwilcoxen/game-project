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

let over = false

const addToe = function(event) {
  const clickPosition = event.target.id
  console.log(clickPosition)
  //spot is the text(x or o) on div
  const spot = $(event.target).text()
  console.log(spot)
  //once position is found, log X or O in spot
  if (over === true) { return }
  console.log(over)
  let toeInAJar = toe
  console.log(toeInAJar)
//  if(spot !== 'x' && spot !== 'o' && over === false) {
    //document.getElementById('error').style.display = 'none';
    //change turn
    if (toe === 'x' && over === false) {
      console.log(toe)
      $(event.target).text('x')
      board[clickPosition] = toe
      document.getElementById('viewO').style.display = 'block';
      document.getElementById('viewX').style.display = 'none';
      toe = 'o'
      console.log(toe)
      }
     else if (toe === 'o' && over === false) {
      console.log(toe)
      $(event.target).text('o')
      board[clickPosition] = toe
      document.getElementById('viewX').style.display = 'block';
      document.getElementById('viewO').style.display = 'none';
      toe = 'x'
      console.log(toe)
    } else {
    document.getElementById('error').style.display = 'block';
    }
    api.onUpdateGame({
      "game": {
        "cell": {
          "index": clickPosition,
          "value": toeInAJar
        },
        "over": over
      }
  })
  //check winner
  winToes()

  if (over === true) {
    console.log('Game over')
  }
}

//check board[0] for winner
const winToes = function(event) {
  console.log(board)
  //let over = false
  //top row
  if (board[0] === board[1] && board[0] === board[2] && board[0] !==''){
    console.log('winner!'+board[0])
    document.getElementById('winner').style.display = 'block'
    $('#winner').text(board[0]+' wins!')
    noToes()
    over = true

    //middle row
  } else if (board[3] === board[4] && board[3] === board[5] && board[3] !==''){

    console.log('winner!'+board[3])
    document.getElementById('winner').style.display = 'block'
    $('#winner').text(board[3]+' wins!')
    noToes()
    over = true
    //bottom row
  } else if (board[6] === board[7] && board[6] === board[8] && board[6] !==''){

    console.log('winner!'+board[6])
    document.getElementById('winner').style.display = 'block'
    $('#winner').text(board[6]+' wins!')
    noToes()
    over = true
    //left column
  } else if (board[0] === board[3] && board[0] === board[6] && board[0] !==''){

    console.log('winner!'+board[0])
    document.getElementById('winner').style.display = 'block'
    $('#winner').text(board[0]+' wins!')
    noToes()
    over = true
    //middle column
  } else if (board[1] === board[4] && board[1] === board[7] && board[1] !=='') {

    console.log('winner!'+board[1])
    document.getElementById('winner').style.display = 'block'
    $('#winner').text(board[0]+' wins!')
    noToes()
    over = true
    //right column
  } else if (board[2] === board[5] && board[2] === board[8] && board[2] !=='') {
    console.log('winner!'+ board[2])
    document.getElementById('winner').style.display = 'block'
    $('#winner').text(board[2]+' wins!')
    noToes()
    over = true
    //left diagonal
  } else if (board[0] === board[4] && board[0] === board[8] && board[0] !=='') {
    console.log('winner!'+ board[0])
    document.getElementById('winner').style.display = 'block'
    $('#winner').text(board[0]+' wins!')
    noToes()
    over = true
    //right diagonal
  } else if (board[2] === board[4] && board[2] === board[6] && board[2] !=='') {
    console.log('winner!'+ board[2])
    document.getElementById('winner').style.display = 'block'
    $('#winner').text(board[2]+' wins!')
    noToes()
    over = true
}
  else {
    //let over = false
  }
}

const noToes = function () {
  document.getElementById('viewX').style.display = 'none';
  document.getElementById('viewO').style.display = 'none';
  //document.getElementById('the game').removeEventListener('click', addToe)


}

//const isOver = function () {
//  if (over === true) {
//    document.getElementById("the game").removeEventListener("click", addToe)
//  }
//  else {
//    document.getElementById("the game").addEventListener("click", addToe);
//  }
//}


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

// sign out function which triggers sign in/up elements to appear
const onSignOut = function (event) {
  event.preventDefault()
  console.log('Signed out')
    document.getElementById('sign-in').style.display = 'block'
    document.getElementById('sign-up').style.display = 'block'
    document.getElementById('sign-out').style.display = 'none'
    document.getElementById('change-pw').style.display = 'none'
    document.getElementById('games-played').style.display = 'none'
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
//onNewGame shows the game board, links to newGameStart api,
const onNewGame = function (event) {
  event.preventDefault()
//  document.getElementById("the game").addEventListener("click", addToe);
  console.log('New game start')
  document.getElementById('the game').style.display = 'block'
  document.getElementById('winner').style.display = 'none'
  $('.box').text('')

  api.newGameStart()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGamesPlayed = function (event) {
  event.preventDefault()

  api.gamesPlayed()
    .then(ui.gamesPlayedSuccess)
    .catch(ui.gamesPlayedFailure)
}

module.exports = {
  addToe,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onGamesPlayed
}
