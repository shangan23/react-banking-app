import React from 'react'
import { IsLoginContext } from '../context/Login'
import { Redirect } from 'react-router-dom'

function Logout(props) {
    const [login, setLogin] = React.useContext(IsLoginContext)
    return <React.Fragment>
        {<Redirect to="/react-banking-app/" />}
    </React.Fragment>
}

export default Logout;