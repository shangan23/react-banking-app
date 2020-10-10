import React, { useState } from 'react'
import { Button, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography } from '@material-ui/core'
import Text from '../components/Fields/Text'
import Password from '../components/Fields/Password'
import { connect } from 'react-redux'
import { loginAction, loginSuccess, loginFailure } from '../redux/login/loginAction'

function Login(props) {
    const [username, setUsername] = useState('john')
    const [password, setPassword] = useState('john@123')

    const onUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const Authenticate = (e) => {
        e.preventDefault();
        props.loginAction();
        fetch(`https://my-json-server.typicode.com/shangan23/banking-api/users?user_name=${username}`)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0)
                    props.loginSuccess(data[0])
                else {
                    setUsername('')
                    setPassword('')
                    throw (new Error('Invalid username/password'))
                }
            })
            .then(() => { return props.history.push("/react-banking-app/dashboard") })
            .catch(err => props.loginFailure(err.message))
    }

    let dialogTitle = 'Hey there! Welcome to React banking application'
    dialogTitle = props.error ? `Error - ${props.error}` : dialogTitle
    dialogTitle = props.loading ? 'Authenticating please wait...' : dialogTitle

    let dialogTitleColor = 'primary'
    dialogTitleColor = props.error ? 'secondary' : dialogTitleColor
    dialogTitleColor = props.error ? 'primary' : dialogTitleColor

    return (
        <React.Fragment>
            <Dialog open disableBackdropClick hideBackdrop>
                <form onSubmit={Authenticate}>
                    <DialogTitle>
                        <Typography variant="subtitle1">
                          Personal Banking - Login
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography variant="overline" color={dialogTitleColor} >
                                {dialogTitle}
                            </Typography><br />
                            <Typography variant="caption" color="textPrimary" >
                               Try sample username/password as john/john
                            </Typography>
                        </DialogContentText>
                        <Grid container spacing={5}>
                            <Grid container item xs={6}><Text value={username} onChange={onUsernameChange} required placeholder="Your username" /></Grid>
                            <Grid container item xs={6}><Password value={password} onChange={onPasswordChange} required placeholder="Your password" /></Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" type="submit">Login</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </React.Fragment>
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
        loginSuccess: (user) => { dispatch(loginSuccess(user)) },
        loginFailure: err => dispatch(loginFailure(err))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);