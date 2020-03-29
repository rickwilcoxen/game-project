'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess data is: ', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on Sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure error is: ', error)
}


const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess data is: ', data)
  document.getElementById('sign-out').style.display = 'block'
  document.getElementById('sign-in').style.display = 'none'
  document.getElementById('change-pw').style.display = 'block'
  document.getElementById('sign-up').style.display = 'none'
  document.getElementById('new-game').style.display = 'block'
  document.getElementById('games-played').style.display = 'block'
  //document.getElementById('the game').style.display = 'block'
  store.user = data.user
}

const signInFailure = function (data) {
  $('#message').text('Sign in fail')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signInFailure data is: ', data)
}

const changePasswordSuccess = function () {
  $('#message').text('Change password success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const changePasswordFailure = function (data) {
  $('#message').text('change password fail')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('changePasswordFailure data is: ', data)
}

const signOutSuccess = function () {
  $('#message').text('sign out success')
  $('#message').removeClass()
  $('#message').addClass('success')
  document.getElementById('the game').style.display = 'none'
}
const signOutFailure = function () {
  $('#message').text('sign out failure')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

//a successful game start
const newGameSuccess = function (data) {
  console.log('new game start')
  document.getElementById('new-game').style.display = 'block'
  store.game = data.game
  console.log(store.game)
}

//if a new game somehow failed to start - this happens
const newGameFailure = function () {
  console.log('new game fail')
  document.getElementById('new-game').style.display = 'none'
  $('#message').text('new game failure')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

//winner message
//const winnerFind = function () {
//  document.getElementById('winner').style.display = 'block'
//  $('#winner').text('You win!')
//}

const gamesPlayedSuccess = function (store) {
console.log(store)
  $('#message').text('Games Played:'+ store.games.length)

}

const gamesPlayedFailure = function () {

}


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  gamesPlayedSuccess,
  gamesPlayedFailure
}
