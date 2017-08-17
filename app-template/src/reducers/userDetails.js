/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {AUTH_SUCCESS,AUTH_REQUEST,AUTH_FAILURE} from '../actions/userDetails.js'

const userDetails = (state ={
    isLogged: false,
    login:null,
    permitions:[]
}, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      // try login
    case AUTH_SUCCESS:
      // login success
    case AUTH_FAILURE:
      //login failure
      return state;
      
    default:
      return state
  }
}

export default userDetails
