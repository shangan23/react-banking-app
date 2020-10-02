import React, { useContext } from 'react'
import { IsLoginContext } from '../context/Login'
import {Redirect} from 'react-router-dom'

function Login(props) {
    const [login, setLogin] = useContext(IsLoginContext);

    const Authenticate = (e) => {
        e.preventDefault();
        setLogin(true)
        return props.history.push("/react-banking-app/dashboard")
    }

    return (
        <form onSubmit={Authenticate}>
            <input type="text" placeholder="Your username" />
            <input type="password" placeholder="Your password" />
            <button type="submit">Login</button>
        </form>
    )

}

export default Login;