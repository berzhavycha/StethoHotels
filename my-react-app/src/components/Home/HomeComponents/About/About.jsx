import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
    return (
        <section className='about-section'>
            <div className="about-section-inner container">
                <div className="inner-left">
                    <p className='green'>About us</p>
                    <h1>We <strong>provide solutions</strong> to grow your business</h1>
                    <p className='desc'>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.
                    </p>
                    <Link>Explore More <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
                <div className="inner-right">
                    <div className="video-block">
                        <iframe  src="https://www.youtube.com/embed/668nUCeBHyY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
