import React, { useState } from 'react'

const AccordionItem = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`accordion-item ${isOpen && 'open'}`}>
            <div className="accordion-item-top" onClick={() => setIsOpen(prev => !prev)}>
                <h3>{`0${index + 1}.`} {item.question}</h3>
                <i class={`fa-solid ${isOpen ? 'fa-eye' : 'fa-eye-slash'}`}></i>
            </div>
            <div className="accordion-answer">
                <p>{item.answer}</p>
                {item.clauses.map((item, index) => {
                    return <p key={index}><i class="fa-regular fa-circle"></i> {item}</p>
                })}
            </div>
        </div>
    )
}

export default AccordionItem
