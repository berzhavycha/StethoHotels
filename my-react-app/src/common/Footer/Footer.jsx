import React from 'react'
import { Link } from 'react-router-dom'

import Newsletter from './FooterComponents/Newsletter'
import RecentPosts from './FooterComponents/RecentPosts'
import SocialIcons from './FooterComponents/SocialIcons'

import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-inner container">
                <div className="left">
                    <div className="about-us">
                        <h1 className="footer-title">about us</h1>
                        <p className='footer-text'>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet consectetur adipiscing elit sed et eletum.
                            <br /><br />
                            Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet.
                        </p>
                        <SocialIcons />
                    </div>
                    <div className="navigation">
                        <h1 className="footer-title">navigation</h1>
                        <nav>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/about'}>About Us</Link>
                            <Link to={'/blogs'}>Blog</Link>
                            <Link to={'/faq'}>Faq</Link>
                            <Link to={'contactus'}>Contact</Link>
                        </nav>
                    </div>
                </div>
                <div className="right">
                    <RecentPosts />
                    <Newsletter />
                </div>
            </div>
            <p className='copyright'>© 2023 All Rights Reserved.</p>
        </footer>
    )
}

export default Footer
