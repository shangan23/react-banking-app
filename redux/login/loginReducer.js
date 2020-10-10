import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './loginTypes'

const initialLoginState = {
    loading: false,
    user: [],
    error: ''
}

const loginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: ''
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                user: [],
                error: action.payload
            }
        case LOGOUT:
            return initialLoginState
        default: return state
    }
}

export default loginReducer;