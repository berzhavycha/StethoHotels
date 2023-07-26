import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HelpBlock from '../../common/HelpBlock/HelpBlock'
import Accordion from '../../common/Accordion/Accordion'
import { accordion } from '../../data'
import './FaqLayout.css'

const FaqLayout = () => {
    const [currentTopic, setCurrentTopic] = useState(1)
    const currentItem = accordion.find(item => item.id === currentTopic)

    return (
        <div className='faq-layout'>
            <div className="faq-layout-inner container">
                <div className="left">
                    <div className="faq-menu">
                        {accordion.reduce((acc, item) => {
                            if (!acc.includes(item.title)) {
                                acc.push({title: item.title, id: item.id})
                            }

                            return acc
                        }, []).map((link, index) => {
                                return <Link key={index} onClick={() => setCurrentTopic(link.id)}><i class="fa-solid fa-angle-right"></i> {link.title}</Link>
                            })
                        }
                    </div>
                    <HelpBlock />
                </div>
                <div className="right">
                    <Accordion item={currentItem} />
                </div>
            </div>
        </div>
    )
}

export default FaqLayout
