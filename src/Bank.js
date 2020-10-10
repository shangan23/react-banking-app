import React from 'react'
import URLRouter from './Router'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from '../components/layouts/Header'
import store from '../redux/store'
import { Provider } from 'react-redux'

const container = {
    padding: '5px'
}

function Bank() {
    return (
        <React.Fragment>
            <Router>
                <Provider store={store}>
                    <Header />
                    <div style={container}>
                        <Switch>
                            <URLRouter />
                        </Switch>
                    </div>
                </Provider>
            </Router>
        </React.Fragment>
    );
}
export default Bank;