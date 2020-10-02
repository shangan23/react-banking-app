import React, { useContext } from 'react'
import { UserContext } from '../context/User'
import { IsLoginContext } from '../context/Login'
import { Redirect } from 'react-router-dom'

function Profile() {
    const [user, setUser] = useContext(UserContext) 
    const [login, setLogin] = useContext(IsLoginContext)
    if (!login)
        return <Redirect to="/login" />
    return (
        <ul>
            <li>FullName: {user.first_name} {user.last_name}</li>
            <li>Aadhar Number: {user.aadhar_number}</li>
            <li>Country: {user.country}</li>
        </ul>
    )

}

export default Profile;