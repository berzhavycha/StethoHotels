import React from 'react'
import { Link } from 'react-router-dom'

import { checks } from '../../../../data'
import './Download.css'

const Download = () => {
    return (
        <section className='download-section'>
            <div className="download-section-inner container">
                <div className="left">
                    <p>Download Our App</p>
                    <h1>Wow! Get This Templete App For Your Mobile</h1>
                    <div className="checks">
                        {checks.map((item, index) => {
                            return (
                                <div key={index} className="check-item">
                                    <i class="fa-solid fa-check"></i>
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                    <div className="download-links">
                        <Link><img src='../../../../../public/Images/appstore-button.png' /></Link>
                        <Link><img src='../../../../../public/Images/google-play-button.png' /></Link>
                    </div>
                </div>
                <div className="right">
                    <img src='../../../../../public/Images/app-image-1.png' />
                </div>
            </div>
        </section>
    )
}

export default Download
