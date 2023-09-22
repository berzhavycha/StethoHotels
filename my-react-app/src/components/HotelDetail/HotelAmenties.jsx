import React from 'react'

const HotelAmenties = ({ hotel }) => {
    const amenties = JSON.parse(hotel?.amenties)

    return (
        <div className='hotel-amenties'>
            <h2>Amenties</h2>
            <div className="amenties-container">
                {amenties?.map((item, index) => {
                    return <div key={index} className="amenties-block">
                        <i className={`fa-solid ${item.icon}`}></i>
                        <p>{item.text}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default HotelAmenties
