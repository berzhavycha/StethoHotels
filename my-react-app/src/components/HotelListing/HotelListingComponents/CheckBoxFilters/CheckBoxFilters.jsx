import React, { useState } from 'react'

import { useHotelsFilterTypeContext } from '../../../../context/HotelsFilter/HotelsFilterProvider'

import './CheckBoxFilters.css'

const CheckBoxFilters = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [isSelectedAll, setIsSelectedAll] = useState(false)

    const { filterType, setFilterType } = useHotelsFilterTypeContext()


    const selectOption = (e) => {
        const starCount = +e.target.dataset['starscount']

        if (e.target.checked) {
            setFilterType(prev => ({ ...prev, stars: [...filterType.stars, starCount] }))
        } else {
            const stars = filterType.stars.filter(item => item !== starCount)
            setFilterType(prev => ({ ...prev, stars }))
        }
    }


    let i = 5
    const stars = []
    while (i) {
        let starsRow = [isSelectedAll ?
            <input
                onChange={selectOption}
                checked={true}
                type='checkbox'
                data-starscount={i}
                data-testid={`star-${i}`}
            />
            :
            <input
                onChange={selectOption}
                type='checkbox'
                data-starscount={i}
                data-testid={`star-${i}`}
            />
        ]

        for (let j = 0; j < 5; j++) {
            starsRow.push(j < i ? <i className="fa-solid fa-star"></i>
                :
                <i className="fa-regular fa-star"></i>
            )
        }

        starsRow.push(<div className='stars-row-amount'>{`(${i})`}</div>)
        let starsRowContainer = <div className='star-row-container'>{starsRow}</div>
        stars.push(starsRowContainer)

        i--
    }

    return (
        <div className="filter-item">
            <div className="filter-item-top" onClick={() => setIsOpen(prev => !prev)}>
                <h2>Star Rating</h2>
                <i className={`fa-solid fa-square-${isOpen ? 'minus' : 'plus'}`}></i>
            </div>
            <div className={`filter-item-content ${isOpen && 'open'}`}>
                <div className="star-options">
                    <button className='star-option' onClick={() => setIsSelectedAll(prev => !prev)}>Select All</button>
                    <span>|</span>
                    <button className='star-option' onClick={() => setIsSelectedAll(false)}>Clear</button>
                    <div className="stars">
                        {stars}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckBoxFilters
