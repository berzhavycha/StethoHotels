import React, { createContext, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { signUp, logOut, logIn } from '../../features/userSlice'

const userContext = createContext()

export const UserProvider = ({ children }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const logInUser = (user) => {
        dispatch(logIn(user))
    }

    const signUpUser = (user) => {
        dispatch(signUp(user))
    }

    const logout = () => {
        dispatch(logOut())
    }

    return (
        <userContext.Provider value={{ user, signUpUser, logout, logInUser }}>
            {children}
        </userContext.Provider>
    )
}

const useUserContext = () => {
    return useContext(userContext)
}

export default useUserContext
