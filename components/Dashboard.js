import React, { useContext } from 'react'
import { UserContext } from '../context/User'
import { IsLoginContext } from '../context/Login'
import { Redirect } from 'react-router-dom'

function Dashboard() {
    const [user, setUser] = useContext(UserContext) 
    const [login, setLogin] = useContext(IsLoginContext)
    if (!login)
        return <Redirect to="/react-banking-app/" />
    return (
        <React.Fragment>
            <h1>Hello {user.first_name} {user.last_name}!</h1>
        </React.Fragment>
    )

}

export default Dashboard;