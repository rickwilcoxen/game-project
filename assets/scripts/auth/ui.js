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
  store.user = data.user
}

const signInFailure = function (data) {
  $('#message').text('Sign in fail')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signInFailure data is: ', data)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Change password success')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('change password data is: ', data)
  store.user = data.user
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
}
const signOutFailure = function () {
  $('#message').text('sign out failure')
  $('#message').removeClass()
  $('#message').addClass('failure')
}
//const viewX = function () {
//  $('#messageGame').text('X, your turn.')
//  $('#messageGame').removeClass()
//  $('#messageGame').addClass('xGo')
//}

//const viewO = function () {
//  $('#messageGame').text('O, your turn.')
//  $('#messageGame').removeClass()
//  $('#messageGame').addClass('oGo')
//}


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
