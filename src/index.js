import React from 'react'
import ReactDOM from 'react-dom'
import Bank from './Bank'
import store from '../redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(<React.StrictMode><Provider store={store}><Bank /></Provider></React.StrictMode>, document.getElementById('root'));