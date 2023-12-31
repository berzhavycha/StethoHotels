import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import SectionHeader from '.././../../../common/SectioHeader/SectionHeader'
import { useGetAllCitiesQuery } from '../../../../features/citiesSlice'

import './CitiesComponent.css'

const CitiesComponent = () => {

    const { data: cities } = useGetAllCitiesQuery()
    const location = useLocation()
    const path = location.pathname.includes('destinations') ? '' : 'destinations/'

    return (
        <section className='cities-section'>
            <SectionHeader text={'Most Popular Destinations'} />
            <div className="cities-section-inner container">
                {cities?.map((city) => {

                    return (
                        <Link key={city.id} to={`${path}${city.id}`} className="city-item" state={{ page: 'Destinations Detail' }}>
                            <div className="city-content">
                                <div className="photo">
                                    <img src={city.mainImg} alt={city.name}/>
                                </div>
                                <div className="shell"><i class="fa-solid fa-up-right-from-square"></i></div>
                                <span>{city.name}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default CitiesComponent
