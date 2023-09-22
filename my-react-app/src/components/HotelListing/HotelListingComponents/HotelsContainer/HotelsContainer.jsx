import React, { useState } from 'react'
import HotelItem from '../HotelItem/HotelItem'
import './HotelsContainer.css'
import { useSearchParams } from 'react-router-dom'
import NotFound from '../../../../common/NotFound/NotFound'

const HotelsContainer = ({ hotelsIds }) => {

    const [hotelsPerPage, setHotelsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)

    const numOfTotalPages = Math.ceil(hotelsIds?.length / hotelsPerPage)
    const pages = [...Array(numOfTotalPages + 1).keys()].slice(1)

    let indexOfTheLastHotel = currentPage * hotelsPerPage
    let indexOfTheFirstHotel = indexOfTheLastHotel - hotelsPerPage

    while (hotelsIds.length <= indexOfTheFirstHotel) {
        indexOfTheFirstHotel -= hotelsPerPage
        indexOfTheLastHotel -= hotelsPerPage
    }

    const  visibleHotels = hotelsIds?.slice(indexOfTheFirstHotel, indexOfTheLastHotel)

    const handleNextPage = () => {
        if (currentPage !== numOfTotalPages) setCurrentPage(prev => prev + 1)
    }

    const handlePrevPage = () => {
        if (currentPage !== 1) setCurrentPage(prev => prev - 1)
    }


    return (
        <section className="hotels-container">
            {!visibleHotels.length ?
                <NotFound />
                :
                visibleHotels?.map((id, index) => {
                    return <HotelItem id={id} key={index} />
                })}
            {pages?.length > 1 && <div className="pagination-btns">
                <span onClick={handlePrevPage} className="prev"><i class="fa-solid fa-angles-left"></i></span>
                {pages.map((item) => {
                    return <span className={`${currentPage === item && 'active'}`} onClick={() => setCurrentPage(item)} key={item}>{item}</span>;
                })}
                <span onClick={handleNextPage} className="prev"><i class="fa-solid fa-angles-right"></i></span>
            </div>}
        </section>
    )
}

export default HotelsContainer
