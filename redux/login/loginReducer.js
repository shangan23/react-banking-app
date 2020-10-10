import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './loginTypes'

const initialLoginState = {
    loading: false,
    user: {},
    error: '',
    isLoggedIn:false
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
                error: '',
                isLoggedIn:true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                user: [],
                error: action.payload,
                isLoggedIn:false
            }
        case LOGOUT:
            return initialLoginState
        default: return state
    }
}

export default loginReducer;