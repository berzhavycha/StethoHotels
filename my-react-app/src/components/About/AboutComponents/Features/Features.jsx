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
                <img src="../../../../../public/Images/feature-img-1.jpg" alt="Feature" />
                <div className="right">
                    <h1>Our <span className='green'>Features</span></h1>
                    <div className="features-tabs">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                data-index={tab.id}
                                className={currentTab.id === tab.id ? 'active' : ''}
                                onClick={() => handleTabClick(tab.id)}
                            >
                                <i className={tab.icon}></i> {tab.title}
                            </button>
                        ))}
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
