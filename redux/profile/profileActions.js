import { PROFILE_FETCH, PROFILE_FETCH_SUCCESS, PROFILE_FETCH_FAILURE } from './profileTypes'

const profileFetch = () => {
    return {
        type: PROFILE_FETCH
    }
}

const profileSuccess = data => {
    return {
        type: PROFILE_FETCH_SUCCESS,
        payload: data
    }
}

const profileFailure = error => {
    return {
        type: PROFILE_FETCH_FAILURE,
        payload: error
    }
}

export { profileFetch, profileSuccess, profileFailure }