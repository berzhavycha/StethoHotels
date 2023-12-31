import React from 'react'

import SectionHeader from '../../../../common/SectioHeader/SectionHeader'
import { howItWorks } from '../../../../data'

import './HowItWorks.css'

const HowItWorks = () => {
    return (
        <section className='how-it-works'>
            <SectionHeader text='How It Works' />
            <div className="how-it-works-inner container">
                {howItWorks.map((item) => {
                    return (
                        <div key={item.id} className="works-item">
                            <img src={item.imageUrl} alt='htw-img'/>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}


export default HowItWorks
