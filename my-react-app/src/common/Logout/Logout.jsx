import React from 'react'

import useUserContext from '../../context/User/UserProvider'

import './Logout.css'

const Logout = () => {
    const { logout } = useUserContext()

    return (
        <section className='logout-section'>
            <h1>You have already logged in. Do you wanna <button onClick={logout}>Log out?</button></h1>
        </section>
    )
}

export default Logout
