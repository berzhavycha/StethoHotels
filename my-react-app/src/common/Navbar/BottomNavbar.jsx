import React from 'react'
import { useDropdownContext } from '../../context/Dropdown/DropdownProvider'
import {Link} from 'react-router-dom'

const BottomNavbar = () => {
    const {closeDropdown} = useDropdownContext()

    return (
        <div className="container" onMouseOver={closeDropdown}>
            <section className='bottom-navbar'>
                <Link className="logo" to='/'>
                    <img src='../../../public/Images/logo.png' alt="logoImg" />
                </Link>
                <div className="bottom-navbar-info">
                    <div className="block-info">
                        <i className="fa-regular fa-clock"></i>
                        <div className="block-info-right">
                            <h3>Working Hours</h3>
                            <h4>Monday - Sunday: 9.00am to 6.00pm</h4>
                        </div>
                    </div>
                    <div className="block-info">
                        <i className="fa-solid fa-phone"></i>
                        <div className="block-info-right">
                            <h3>Call Us</h3>
                            <h4>+380 96 111 6345</h4>
                        </div>
                    </div>
                    <div className="block-info">
                        <i className="fa-sharp fa-regular fa-envelope"></i>
                        <div className="block-info-right">
                            <h3>Mail Us</h3>
                            <h4>email@gmail.com</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BottomNavbar
