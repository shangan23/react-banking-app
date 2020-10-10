import { combineReducers } from 'redux'
import loginReducer from './login/loginReducer'
import actionReducer from './accounts/accountReducer'
import transactionReducer from './transactions/transactionReducer'
import profileReducer from './profile/profileReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    accounts: actionReducer,
    transactions: transactionReducer,
    profile: profileReducer
})

export default rootReducer