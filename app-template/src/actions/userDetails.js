export const LOGIN = 'LOGIN'

export const tryLogin = (credentails) => ({type: LOGIN, credentails})

export const loginDone = (loginResult) => ({type: LOGIN, status: loginResult.status, responce: loginResult.responce, error: loginResult.error})