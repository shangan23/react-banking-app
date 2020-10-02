import React from 'react'
import URLRouter from './Router'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from '../components/layouts/Header'
import { LoginProvider } from '../context/Login'
import { UserProvider } from '../context/User'

const container = {
    padding: '5px'
}

function Bank() {
    return (
        <React.Fragment>
            <Router>
                <LoginProvider>
                    <UserProvider>
                        <Header />
                        <div style={container}>
                            <Switch>
                                <URLRouter />
                            </Switch>
                        </div>
                    </UserProvider>
                </LoginProvider>
            </Router>
        </React.Fragment>
    );
}
export default Bank;