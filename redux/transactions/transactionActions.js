import { TRANSACTION_FETCH, TRANSACTION_FETCH_SUCCESS, TRANSACTION_FETCH_FAILURE } from './transactionTypes'

const transactionFetch = () => {
    return {
        type: TRANSACTION_FETCH
    }
}

const transactionSuccess = data => {
    return {
        type: TRANSACTION_FETCH_SUCCESS,
        payload: data
    }
}

const transactionFailure = error => {
    return {
        type: TRANSACTION_FETCH_FAILURE,
        payload: error
    }
}

export { transactionFetch, transactionSuccess, transactionFailure }
