import { ACCOUNT_FETCH, ACCOUNT_FETCH_SUCCESS, ACCOUNT_FETCH_FAILURE } from './accountTypes'

const initialAccountState = {
    loading: true,
    data: [],
    error: ''
}

const accountReducer = (state = initialAccountState, action) => {
    switch (action.type) {
        case ACCOUNT_FETCH: return {
            ...state,
            loading: true
        }
        case ACCOUNT_FETCH_SUCCESS: return {
            loading: false,
            data: action.payload,
            error: ''
        }
        case ACCOUNT_FETCH_FAILURE: return {
            loading: false,
            data: [],
            error: action.payload
        }
        default: return state
    }
}

export default accountReducer