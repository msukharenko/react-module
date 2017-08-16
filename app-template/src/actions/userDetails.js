export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILURE = 'AUTH_FAILURE'

export const tryLogin = (credentails) => ({type: AUTH_REQUEST, credentails})

export const loginSuccess = (loginResult) => ({type: AUTH_SUCCESS, responce: loginResult.responce})
export const loginSuccess = (loginResult) => ({type: AUTH_FAILURE, error: loginResult.error})