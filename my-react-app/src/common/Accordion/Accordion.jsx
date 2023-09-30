import React from 'react'

import AccordionItem from './AccordionItem'

import './Accordion.css'

const Accordion = ({ item }) => {

    return (
        <section className='accordion'>
            <h1>{item.title}</h1>
            {item.questions.map((item, index) => {
                return (
                    <AccordionItem item={item} index={index} key={index} />
                )
            })}
        </section>
    )
}

export default Accordion
