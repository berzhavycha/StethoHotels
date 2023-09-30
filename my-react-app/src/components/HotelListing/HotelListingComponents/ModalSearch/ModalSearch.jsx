import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './ModalSearch.css'

const ModalSearch = ({ isOpen, closeModal }) => {
    const [modalSearchinputs, setModalSearchInputs] = useState({})
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setModalSearchInputs(prev => ({ ...prev, [name]: value }))
    }

    const searchHotels = () => {
        let searchParamsString = '?'
        let isFirstParam = true
        for (let [key, value] of Object.entries(modalSearchinputs)) {
            searchParamsString += isFirstParam ? `${key}=${value}` : `&${key}=${value}`

            if(isFirstParam) isFirstParam = false
        }
        setModalSearchInputs({})
        navigate(`/hotels${searchParamsString}`)
        closeModal()
    }

    return (
        <section className={`modal-search ${isOpen && 'open'}`}>
            <div className="modal-search-inner">
                <div className="modal-search-top">
                    <h1>Modify Search</h1>
                    <button onClick={closeModal}><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div className="search-inputs">
                    <div className="search-input-block">
                        <input type="text" name='city' placeholder='Search City' onChange={handleInputChange} />
                    </div>
                    <div className="search-input-block">
                        <select name='nearArea' onChange={handleInputChange}>
                            <option value="Near Area">Near Area</option>
                            <option value="south">South</option>
                            <option value="downtown">Downtown</option>
                            <option value="west">West</option>
                            <option value="resort">Resort</option>
                        </select>
                    </div>
                    <div className="search-input-block">
                        <select name='hotelClass' onChange={handleInputChange}>
                            <option value="Hotel class">Hotel class</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="search-input-block">
                        <select name='rooms' onChange={handleInputChange}>
                            <option value="Rooms">Rooms</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="search-input-block">
                        <select name='adults' onChange={handleInputChange}>
                            <option value="Adults">Adults(18+)</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="search-input-block">
                        <select name='children' onChange={handleInputChange}>
                            <option value="Children">Children(0-17)</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <button onClick={searchHotels}>Search</button>
                </div>
            </div>
        </section>
    )
}

export default ModalSearch
