'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  //event.preventDefault()
    console.log('In api.js')
    return $.ajax({
      url: config.apiUrl + '/sign-up',
      method: 'POST',
      data: data
    })
}

const signIn = function (data) {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}


const signOut = function () {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
  })
}

//new newGameStart!
const newGameStart = function() {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.game
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  newGameStart
}
