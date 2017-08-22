import {go} from 'react-router-redux'
import modules from '../utils/modules'
import {BASE_URL} from '../utils/consts'


export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILURE = 'AUTH_FAILURE'


export const loginRequest = (credentails) => ({type: AUTH_REQUEST, credentails})

export const loginSuccess = (json) => ({type: AUTH_SUCCESS, response: json})
export const loginFailure = (error) => ({type: AUTH_FAILURE, error: error})

export const logout = ()=>{
    return dispatch => {
        window.location = 'about:blank'
    }

}

export const trylogin = ({login,password})=>{
    return (dispatch)=>{
        let credentails = {
            login: login,
            password: password
        }
        dispatch(loginRequest(credentails))    

        return fetch(BASE_URL+'/login').then(
            response => response.json()
             
        ).then(json=> {
            json.navItems = getNavItemsByPermition(json.permition)
            dispatch(loginSuccess(json))
        }).catch(error => dispatch(loginFailure(error))  )
    }
}

function getNavItemsByPermition(permitions){
    let allNavItems = getAllNavItems();
    let result = []
    allNavItems.forEach((navitem)=>{
        if (navitem.permition == 'NONE' || permitions.includes(navitem.permition)){
            result.push(navitem);
        }
    })
    return result;
}

function getAllNavItems(){
    let navItems = [];
    modules.forEach((value) => {
        value
          .routes
          .forEach((route) => {
            if (route.isStart) {
                navItems
                .push({
                  modulename: value.modulename,
                  component: route.component,
                  linkto: '/'+value.modulename+((route.location && route.location!='/')?(route.location):''),
                  permition: value.permition,
                  label: value.menulabel
                })
            }
          })
      });
    return navItems;
}