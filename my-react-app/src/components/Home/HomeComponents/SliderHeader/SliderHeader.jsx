import React, { useEffect, useRef, useState } from 'react'
import './SliderHeader.css'
import { slides } from '../../../../data'
import { useDropdownContext } from '../../../../context/DropdownProvider'

const SliderHeader = () => {

    const sliderHeaderRef = useRef()
    const [currentSlide, setCurrentSlide] = useState(slides[0])
    const {closeDropdown} = useDropdownContext()

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

    // закривання dropdown, коли мишка покидає dropdown
    const handleMouseOver = (e) => {
        if(!e.target.classList.contains('dropdown-menu')){
            closeDropdown()
        }
    }

    // змінюю фонове зображення кожен раз, коли змінюється state слайду
    useEffect(() => {
        sliderHeaderRef.current.style.background = `url(${currentSlide.imageUrl})`
    }, [currentSlide])


    return (
        <section ref={sliderHeaderRef} className='slider-header' onMouseOver={handleMouseOver}>
            <div className="slider-header-inner container">
                <div className="form-container">
                    <h2>Enjoy your holiday</h2>
                    <h4>Search and Book Hotel</h4>
                    <form>
                        <input type="text" placeholder='Search City' className="row" />
                        <div className="input-flex">
                            <div className="left">
                                <input type="date" placeholder='Check In' />
                                <select>
                                    <option value="">Adult(s)(18+)</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div className="right">
                                <input type="date" placeholder='Check Out' />
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
                        <button>Search</button>
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
