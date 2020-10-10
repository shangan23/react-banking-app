import { TRANSACTION_FETCH, TRANSACTION_FETCH_SUCCESS, TRANSACTION_FETCH_FAILURE } from './transactionTypes'

const initialTransactionState = {
    loading: true,
    data: [],
    error: ''
}

const transactionReducer = (state = initialTransactionState, action) => {
    switch (action.type) {
        case TRANSACTION_FETCH:
            return {
                ...state,
                loading: true
            }
        case TRANSACTION_FETCH_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case TRANSACTION_FETCH_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default:return state
    }
}

export default transactionReducer