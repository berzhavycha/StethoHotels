import React, { useState } from 'react'
import './HotelFilters.css'
import ModalSearch from '../ModalSearch/ModalSearch'

const HotelFilters = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [isModalSearchOpen, setIsModalSearchOpen] = useState(false)

    return (
        <div className="filter-item">
            <div className="filter-item-top" onClick={() => setIsOpen(prev => !prev)}>
                <h2>Hotels</h2>
                <i className={`fa-solid fa-square-${isOpen ? 'minus' : 'plus'}`}></i>
            </div>
            <div className={`filter-item-content ${isOpen && 'open'}`}>
                <p>4 Hotels on the screen</p>
                <table>
                    <tr>
                        <td>Check In</td>
                        <td>Jan 01, 2020 Wed</td>
                    </tr>
                    <tr>
                        <td>Check Out</td>
                        <td>Jan 01, 2020 Fri</td>
                    </tr>
                    <tr>
                        <td>Room 1</td>
                        <td>1 Adult(s)</td>
                    </tr>
                </table>
                <button onClick={() => setIsModalSearchOpen(true)} className='search'><i className="fa-solid fa-magnifying-glass"></i> Modify Search</button>
            </div>
            <ModalSearch isOpen={isModalSearchOpen} closeModal={() => setIsModalSearchOpen(false)}/>
        </div>
    )
}

export default HotelFilters
