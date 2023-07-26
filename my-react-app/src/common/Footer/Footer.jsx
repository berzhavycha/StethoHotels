import React from 'react'
import { Link } from 'react-router-dom'
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
                        <div className="socials">
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    <div className="navigation">
                        <h1 className="footer-title">navigation</h1>
                        <nav>
                            <Link>Home</Link>
                            <Link>About Us</Link>
                            <Link>Blog</Link>
                            <Link>Faq</Link>
                            <Link>Contact</Link>
                        </nav>
                    </div>
                </div>
                <div className="right">
                    <div className="posts">
                        <h1 className="footer-title">recent posts</h1>
                        <div className="posts-container">
                            <div className="post-item">
                                <p className="text">
                                    Lorem ipsum dolor sit amet sectetur adipiscing elit amet
                                </p>
                                <p className="date"><i class="fa-regular fa-calendar-days"></i> 22 July, 2023</p>
                            </div>
                            <div className="post-item">
                                <p className="text">
                                    Lorem ipsum dolor sit amet sectetur adipiscing elit amet
                                </p>
                                <p className="date"><i class="fa-regular fa-calendar-days"></i> 22 July, 2023</p>
                            </div>
                            <div className="post-item">
                                <p className="text">
                                    Lorem ipsum dolor sit amet sectetur adipiscing elit amet
                                </p>
                                <p className="date"><i class="fa-regular fa-calendar-days"></i> 22 July, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="newsletter">
                        <h1 className="footer-title">newsletter</h1>
                        <p className='footer-text'>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit sed et eletum</p>
                        <input type="text" placeholder='Email Adress...' />
                        <button>subscribe</button>
                    </div>
                </div>
            </div>
            <p className='copyright'>© 2023 All Rights Reserved.</p>
        </footer>
    )
}

export default Footer
