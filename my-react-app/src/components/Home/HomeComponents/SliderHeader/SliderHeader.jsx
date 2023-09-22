import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDropdownContext } from '../../../../context/Dropdown/DropdownProvider'
import { availableCities, slides } from '../../../../data'
import './SliderHeader.css'

const SliderHeader = () => {
    const [currentSlide, setCurrentSlide] = useState(slides[0])
    const [searchCity, setSearchCity] = useState('')
    const [matchedCities, setMatchedCities] = useState([])
    const [isShowCityList, setIsShowCityList] = useState(false)
    const sliderHeaderRef = useRef()

    const navigate = useNavigate()
    const { closeDropdown } = useDropdownContext()

    const nextSlide = () => {
        setCurrentSlide(slide => {
            const index = (slide.id + 1) % slides.length
            return slides[index]
        })
    }

    const prevSlide = () => {
        setCurrentSlide(slide => {
            const index = (slide.id - 1 + slides.length) % slides.length
            return slides[index]
        })
    }

    const handleMouseOver = (e) => {
        if (!e.target.classList.contains('dropdown-menu')) {
            closeDropdown()
        }
    }

    useEffect(() => {
        sliderHeaderRef.current.style.background = `url(${currentSlide.imageUrl})`
    }, [currentSlide])

    useEffect(() => {
        setMatchedCities(availableCities.filter(city => city?.toLowerCase()?.startsWith(searchCity?.toLowerCase())))
    }, [searchCity])
    

    const searchHotel = () => {
        if (!searchCity) return

        navigate(`/hotels?searchCity=${searchCity}`)
    }

    return (
        <section
            ref={sliderHeaderRef}
            className='slider-header'
            onMouseOver={handleMouseOver}
            onClick={(e) => {
                if (!e.target.closest('.cities-list') && !e.target.closest('.row')) {
                    setIsShowCityList(false)
                }
            }}
        >
            <div className="slider-header-inner container">
                <div className="form-container">
                    <h2>Enjoy your holiday</h2>
                    <h4>Search and Book Hotel</h4>
                    <form>
                        <div className="search-city-input">
                            <input
                                type="text"
                                placeholder='Search City'
                                className="row"
                                value={searchCity}
                                onChange={e => setSearchCity(e.target.value)}
                                onFocus={() => setIsShowCityList(true)}
                            />
                            {isShowCityList &&
                                <div className="cities-list">
                                    {matchedCities?.map((city, index) => {
                                        return (
                                            <p onClick={() => {
                                                setIsShowCityList(false)
                                                setSearchCity(city)
                                            }}
                                                key={index}
                                            >
                                                {city}
                                            </p>
                                        )
                                    })}
                                </div>
                            }
                        </div>
                        <div className="input-flex">
                            <div className="left">
                                <div className="date-input">
                                    <input
                                        onFocus={e => e.target.type = 'date'}
                                        type='text'
                                        placeholder='Check Out'
                                    />
                                    <div className="calendar-icon"><i className="fa-solid fa-calendar"></i></div>
                                </div>
                                <select>
                                    <option value="">Adult(s)(18+)</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div className="right">
                                <div className="date-input">
                                    <input
                                        onFocus={e => e.target.type = 'date'}
                                        type='text'
                                        placeholder='Check Out'
                                    />
                                    <div className="calendar-icon"><i className="fa-solid fa-calendar"></i></div>
                                </div>
                                <select>
                                    <option value="">Children(0 - 17)</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                        <select className='row'>
                            <option value="">Rooms</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <button onClick={searchHotel}>Search</button>
                    </form>
                </div>
            </div>
            <div className="slider-btn-shell prev">
                <button className="slider-btn" onClick={prevSlide}><i className="fa-solid fa-caret-left"></i></button>
            </div>
            <div className="slider-btn-shell next">
                <button className="slider-btn" onClick={nextSlide}><i className="fa-solid fa-caret-right"></i></button>
            </div>
        </section>
    )
}

export default SliderHeader
