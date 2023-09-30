import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import ModalSearch from '../ModalSearch/ModalSearch'

import './HotelFilters.css'

const HotelFilters = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [isModalSearchOpen, setIsModalSearchOpen] = useState(false)
    const [searchParams] = useSearchParams()

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
                        <td>City</td>
                        <td>{searchParams.get('city') ?? '-'}</td>
                    </tr>
                    <tr>
                        <td>Hotel Class</td>
                        <td>{searchParams.get('hotelClass') ?? '-'}</td>
                    </tr>
                    <tr>
                        <td>Rooms</td>
                        <td>{searchParams.get('rooms') ?? '-' }</td>
                    </tr>
                </table>
                <button onClick={() => setIsModalSearchOpen(true)} className='search'><i className="fa-solid fa-magnifying-glass"></i> Modify Search</button>
            </div>
            <ModalSearch isOpen={isModalSearchOpen} closeModal={() => setIsModalSearchOpen(false)} />
        </div>
    )
}

export default HotelFilters
