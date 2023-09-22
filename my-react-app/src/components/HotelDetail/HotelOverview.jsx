import React from 'react'

const HotelOverview = ({hotel}) => {
  return (
    <div className='hotel-overview'>
        <h2>Overview</h2>
        <p>{hotel?.overview}</p>
    </div>
  )
}

export default HotelOverview
