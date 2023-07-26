import React from 'react'
import { Link } from 'react-router-dom'
import './HelpBlock.css'

const HelpBlock = () => {
    return (
        <div className="help-block">
            <h1>How can we help you?</h1>
            <p>Lorem ipsum dolor sit ametdf consectetur adipiscing elitdgsh ametdf consectetur piscing.</p>
            <Link><i className="fa-solid fa-phone"></i> Contact Us</Link>
        </div>
    )
}

export default HelpBlock
