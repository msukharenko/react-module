import {BASE_URL} from '../utils/consts.js';

export function login (credentials) =>  {
    fetch(BASE_URL+'/login',{
        method: 'post',  
        headers: {  
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        },  
        body: $.param(credentials)
    })
};

