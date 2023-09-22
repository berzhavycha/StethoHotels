import React from 'react'

const HotelRooms = ({ hotel }) => {
    const hotelRooms = JSON.parse(hotel?.rooms)

    return (
        <div className='hotel-rooms'>
            <h2>Rooms</h2>
            <div className="hotel-rooms-container">
                {hotelRooms?.map((room, index) => {
                    return (
                        <div key={index} className="hotel-room-item">
                            <div className="room-image">
                                <img src={room.imageUrl} />
                            </div>
                            <div className="room-info">
                                <h2>{room.title}</h2>
                                <p className='price'><span className='green'>${room.price}</span> / night</p>
                                <p>Max: {room.capacity} Persons</p>
                                <div className="room-amenties">
                                    {room.amenties.map((item, index) => {
                                        return (
                                            <div key={index} className="amenties-block">
                                                <i className={`fa-solid ${item.icon}`}></i>
                                                <p>{item.text}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="room-btn">
                                    <button>Book Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HotelRooms
