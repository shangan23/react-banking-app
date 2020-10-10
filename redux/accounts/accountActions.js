import { ACCOUNT_FETCH, ACCOUNT_FETCH_SUCCESS, ACCOUNT_FETCH_FAILURE } from './accountTypes'

const accountFetch = () => {
    return {
        type: ACCOUNT_FETCH
    }
}
const accountSuccess = (account) => {
    return {
        type: ACCOUNT_FETCH_SUCCESS,
        payload: account
    }
}
const accountFailure = (error) => {
    return {
        type: ACCOUNT_FETCH_FAILURE,
        payload: error
    }
}

export { accountFetch, accountSuccess, accountFailure }