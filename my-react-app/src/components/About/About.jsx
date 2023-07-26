import React from 'react'
import AboutComponent from '../Home/HomeComponents/About/About'
import Features from './AboutComponents/Features/Features'
import { useDropdownContext } from '../../context/DropdownProvider';


const About = () => {
    return (
        <main className='about-page'>
            <AboutComponent />
            <Features />
        </main>
    )
}

export default About
