import React from 'react'
import URLRouter from './Router'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { connect } from 'react-redux'

const container = {
    padding: '5px'
}

function Bank(props) {
    const { isLoggedIn } = props
    return (
        <React.Fragment>
            <Router>
                {isLoggedIn &&
                    <Header />
                }
                <div style={container}>
                    <Switch>
                        <URLRouter />
                    </Switch>
                </div>
                {isLoggedIn &&
                    <Footer />
                }
            </Router>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.login.isLoggedIn
    }
}

export default connect(mapStateToProps)(Bank);