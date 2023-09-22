import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import './Logout.css'
import useUserContext from '../../context/User/UserProvider'

const Logout = () => {
    const { logout } = useUserContext()
    const navigate = useNavigate()

   

    return (
        <section className='logout-section'>
            <h1>You have already logged in. Do you wanna <button onClick={logout}>Log out?</button></h1>
        </section>
    )
}

export default Logout
