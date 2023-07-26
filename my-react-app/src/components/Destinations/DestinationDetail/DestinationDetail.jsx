import React, { Suspense } from 'react'
import { defer, useLoaderData, Await, Link } from 'react-router-dom'
import { getSingleCity, delay } from '../../../data'
import './DestiantionDetail.css'
import Loading from '../../../common/Loading/Loading'

export const loader = async ({ params }) => {
    return defer({ city: delay(1000).then(() => getSingleCity(params.cityId, 'cities')) })
}

const DestinationDetail = () => {

    const cityPromise = useLoaderData()

    return (
        <section className='destination-detail'>
            <div className="destination-detail-inner container">
                <div className="left">
                    <Suspense fallback={<Loading />} >
                        <Await resolve={cityPromise.city}>
                            {(loadedCity) => {
                                return (
                                    <>
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
                                    </>
                                )
                            }}
                        </Await>
                    </Suspense>
                </div>
                <div className="right">
                    <div className="help-block">
                        <h1>How can we help you?</h1>
                        <p>Lorem ipsum dolor sit ametdf consectetur adipiscing elitdgsh ametdf consectetur piscing.</p>
                        <Link><i className="fa-solid fa-phone"></i> Contact Us</Link>
                    </div>
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
