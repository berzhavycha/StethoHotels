import React, { useState } from 'react'
import { tabs } from '../../../../data'
import './Features.css'

const Features = () => {

    const [currentTab, setCurrentTab] = useState(tabs[0])

    const handleTabClick = (index) => {
        setCurrentTab(tabs.find(item => item.id === index))
    }

    return (
        <section className='features'>
            <div className="features-inner container">
                <img src="../../../../../public/Images/feature-img-1.jpg" />
                <div className="right">
                    <h1>Our <span className='green'>Features</span></h1>
                    <div className="features-tabs">
                        <button data-index={1} className={currentTab.id === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}><i className="fa-regular fa-gem"></i>  Awesome Design</button>
                        <button data-index={2} className={currentTab.id === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}><i className="fa-solid fa-desktop"></i>  Full Devices</button>
                        <button data-index={3} className={currentTab.id === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}><i className="fa-solid fa-users"></i>  User Experience</button>
                    </div>
                    <p className="features-tabs-content">
                        {currentTab.text}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Features
