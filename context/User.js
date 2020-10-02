import React, { createContext, useState } from 'react'
export const UserContext = createContext()
export const UserProvider = props => {
    const [user, setUser] = useState({
        user_name: 'shankar',
        first_name: 'Shankar',
        last_name: 'Ganesh',
        aadhar_number: '2342345235eg',
        country: 'INDIA'
    })
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}