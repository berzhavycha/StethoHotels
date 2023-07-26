import React from 'react'
import { Link } from 'react-router-dom'
import './Logout.css'
import { auth } from '../../data'
import useUserContext from '../../context/User/UserProvider'

const Logout = () => {
    const { setUser } = useUserContext()

    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <section className='logout-section'>
            <h1>You have already logged in. Do you wanna <Link onClick={logout}>Log out?</Link></h1>
        </section>
    )
}

export default Logout
