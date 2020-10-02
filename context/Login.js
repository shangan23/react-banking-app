import React, { createContext, useState } from 'react'

export const IsLoginContext = createContext();

export const LoginProvider = props => {
    const [login, setLogin] = useState(false)
    return (
        <IsLoginContext.Provider value={[login, setLogin]}>
            {props.children}
        </IsLoginContext.Provider>
    )
}