import React from 'react'
import { Button, Paper, Grid, GridList } from '@material-ui/core'
import Text from '../components/Fields/Text'
import Password from '../components/Fields/Password'
import { connect } from 'react-redux'
import { loginAction, loginSuccess, loginFailure } from '../redux/login/loginAction'

function Login(props) {

    const Authenticate = (e) => {
        e.preventDefault();
        props.loginAction();
        fetch('https://my-json-server.typicode.com/shangan23/banking-api/users')
            .then(res => res.json())
            .then(data => props.loginSuccess(data[0]))
            .then(() => { return props.history.push("/react-banking-app/dashboard") })
            .catch(err => props.loginFailure(err.message))
    }

    return (
        <Paper variant="outlined">
            {props.loading ? '...' : ''}
            <form onSubmit={Authenticate}>
                <Grid container spacing={8}>
                    <Grid container item xs={6}><Text value="sdgsdg" required placeholder="Your username" /></Grid>
                    <Grid container item xs={6}><Password value="sdgsdgsdgd" required placeholder="Your password" /></Grid>
                    <Grid container item xs={12}><Button variant="contained" color="secondary" type="submit">Login</Button></Grid>
                </Grid>
            </form>
        </Paper>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.login.loading,
        user: state.login.user,
        error: state.login.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: () => dispatch(loginAction()),
        loginSuccess: (user) => {dispatch(loginSuccess(user))},
        loginFailure: err => dispatch(loginFailure(err))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);