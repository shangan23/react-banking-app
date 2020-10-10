import { PROFILE_FETCH, PROFILE_FETCH_SUCCESS, PROFILE_FETCH_FAILURE } from './profileTypes'

const initialProfileState = {
    loading: true,
    date: {},
    error: ''
}

const profileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case PROFILE_FETCH:
            return {
                ...state,
                loading: true
            }
        case PROFILE_FETCH_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case PROFILE_FETCH_FAILURE:
            return {
                loading: false,
                data: {},
                error: action.payload
            }
        default: return state
    }
}

export default profileReducer