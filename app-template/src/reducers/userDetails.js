/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {AUTH_SUCCESS, AUTH_REQUEST, AUTH_FAILURE} from '../actions/userDetails.js'

const userDetails = (state = {
  isFetching: false,
  isLogged: false,
  login: null,
  fio: null,
  email: null,
  permitions: [],
  navItems: []
}, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLogged: true,
        login: action.response.login,
        email:action.response.email,
        permitions: action.response.permitions,
        navItems: action.response.navItems
      }
      
      // login success
    case AUTH_FAILURE:
      //login failure
      return {
        ...state,
        isFetching: false,
        isLogged: false
      }

    default:
      return state
  }
}

export default userDetails
