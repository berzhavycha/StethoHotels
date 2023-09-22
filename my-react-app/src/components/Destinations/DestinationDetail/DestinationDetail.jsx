import React from 'react'
import { useGetCityQuery } from '../../../features/citiesSlice'
import './DestiantionDetail.css'
import Loading from '../../../common/Loading/Loading'
import HelpBlock from '../../../common/HelpBlock/HelpBlock'
import { useParams } from 'react-router-dom'


const DestinationDetail = () => {
    const { cityId } = useParams()
    const { data: loadedCity, isLoading } = useGetCityQuery({id: cityId})

    if (isLoading) return <Loading />

    return (
        <section className='destination-detail'>
            <div className="destination-detail-inner container">
                <div className="left">
                    <img className='main-image' src={loadedCity.mainImg} />
                    <p>{loadedCity.text}</p>
                    <h1>What is {loadedCity.name} City?</h1>
                    <p>{loadedCity.beforeImg}</p>
                    <div className="images">
                        {loadedCity.images.map((item, index) => {
                            return <img key={index} src={item} />
                        })}
                    </div>
                    <p>{loadedCity.afterImg}</p>
                </div>
                <div className="right">
                    <HelpBlock />
                    <div className="text-block">
                        <div className="shell">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur cipsum dolor sit amet consectetur adipiscing elit amet consect piscing elit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DestinationDetail
