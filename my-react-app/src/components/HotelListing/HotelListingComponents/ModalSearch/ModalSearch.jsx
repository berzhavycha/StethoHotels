import React from 'react'
import './ModalSearch.css'

const ModalSearch = ({ isOpen, closeModal }) => {
    return (
        <section className={`modal-search ${isOpen && 'open'}`}>
            <div className="modal-search-inner">
                <div className="modal-search-top">
                    <h1>Modify Search</h1>
                    <button onClick={closeModal}><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div className="search-inputs">
                    <div className="search-input-block">
                        <input type="text" placeholder='Search City' />
                    </div>
                    <div className="search-input-block">
                        <input type="text" placeholder='Check In' />
                    </div>
                    <div className="search-input-block">
                        <input type="text" placeholder='Check Out' />
                    </div>
                    <div className="search-input-block">
                        <input type="text" placeholder='Hotel' />
                    </div>
                    <div className="search-input-block">
                        <select>
                            <option value="Near Area">Near Area</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="search-input-block">
                        <select>
                            <option value="Hotel class">Hotel class</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="search-input-block">
                        <select>
                            <option value="Rooms">Rooms</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="search-input-block">
                        <select>
                            <option value="Near Area">Adults(18+)</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="search-input-block">
                        <select>
                            <option value="Near Area">Children(0-17)</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <button>Search</button>
                </div>
            </div>
        </section>
    )
}

export default ModalSearch
