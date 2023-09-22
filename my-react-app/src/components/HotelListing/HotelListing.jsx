import React, { useMemo } from 'react'
import HotelFilters from './HotelListingComponents/HotelFilters/HotelFilters'
import './HotelListing.css'
import Price from './HotelListingComponents/Price/Price'
import CheckBoxFilters from './HotelListingComponents/CheckBoxFilters/CheckBoxFilters'
import AreaFilters from './HotelListingComponents/AreaFilters/AreaFilters'
import HotelsContainer from './HotelListingComponents/HotelsContainer/HotelsContainer'
import { useSearchParams } from 'react-router-dom'
import Loading from '../../common/Loading/Loading'
import HelpBlock from '../../common/HelpBlock/HelpBlock'
import { useGetHotelsQuery } from '../../features/hotelsSlice'
import NotFound from '../../common/NotFound/NotFound'
import { useHotelsFilterTypeContext } from '../../context/HotelsFilter/HotelsFilterProvider'


const HotelListing = () => {
    const { data: loadedHotels, isLoading, isError } = useGetHotelsQuery()
    const [searchParams] = useSearchParams()
    const { filterType } = useHotelsFilterTypeContext()


    let hotelsIds = useMemo(() => {
        let hotels = []

        if (!searchParams.get('searchCity')) hotels = loadedHotels?.ids
        else {
            hotels = loadedHotels?.ids.filter(id => loadedHotels.entities[id].location.startsWith(searchParams.get('searchCity')))
        }


        if (filterType.price) {
            const bottomLine = filterType.price.split('-')[0]
            const topLine = filterType.price.split('-')[1]

            hotels = hotels.filter(id => {
                const price = +loadedHotels.entities[id].price
                return price >= +bottomLine && price <= +topLine
            })

        }

        if (filterType.stars.length) {
            hotels = hotels.filter(id => {
                let isValidHotel = false
                filterType.stars.forEach(stars => {
                    if (+loadedHotels.entities[id].stars === stars) {
                        isValidHotel = true
                    }
                })

                return isValidHotel
            })
        }

        if (filterType.area.length) {
            hotels = hotels.filter(id => {
                let isValidHotel = false
                filterType.area.forEach(item => {
                    if (loadedHotels.entities[id].area === item) {
                        isValidHotel = true
                    }
                })

                return isValidHotel
            })
        }

        return hotels
    }, [filterType.price, filterType.stars, filterType.area, searchParams, loadedHotels])


    return (
        <section className='hotel-listing'>
            <div className="hotel-listing-inner container">
                <div className="left">
                    <HotelFilters />
                    <Price />
                    <CheckBoxFilters />
                    <AreaFilters loadedHotels={loadedHotels} />
                    <HelpBlock />
                </div>
                <div className="right">
                    {isLoading ?
                        <Loading />
                        : isError ?
                            <NotFound />
                            :
                            <HotelsContainer hotelsIds={hotelsIds} />
                    }
                </div>
            </div >
        </section >
    )
}

export default HotelListing
