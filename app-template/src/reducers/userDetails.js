/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {LOGIN} from '../actions/userDetails.js'

const userDetails = (state ={
    isLogged: false,
    login:null,
    permitions:[]
}, action) => {
  switch (action.type) {
    case LOGIN:
      if (action.status){
        if (action.responce){
          //login done
        }else{
          //login error
        }
      }else{
        // try login
      }

      return 
      
    default:
      return state
  }
}

export default userDetails
