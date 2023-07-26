import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import useUserContext from '../../context/User/UserProvider'

const AuthRequired = () => {
    const { user } = useUserContext()
    const location = useLocation()

    if (!user) {
        return <Navigate to={`/login?path=${location.pathname}`} state={{message: 'You must log in first!'}}/>
    }

    return <Outlet />
}

export default AuthRequired
