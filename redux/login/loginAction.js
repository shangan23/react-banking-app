import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE,LOGOUT } from './loginTypes'

const loginAction = () => {
    return {
        type: LOGIN
    }
}

const loginSuccess = user => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

const loginFailure = err => {
    return {
        type: LOGIN_FAILURE,
        payload: err
    }
}

const logout = () => {
    return {
        type: LOGOUT
    }
}


export { loginAction, loginSuccess, loginFailure,logout }