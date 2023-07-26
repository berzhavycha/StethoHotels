import React, { createContext, useContext, useState } from 'react'

const userContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}

const useUserContext = () => {
    return useContext(userContext)
}

export default useUserContext
