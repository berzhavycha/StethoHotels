import React, { useState } from 'react'

import { useHotelsFilterTypeContext } from '../../../../context/HotelsFilter/HotelsFilterProvider'

import './AreaFilters.css'

const AreaFilters = ({ loadedHotels }) => {
    const [isOpen, setIsOpen] = useState(true)
    const [isSelectedAll, setIsSelectedAll] = useState(false)
    const { filterType, setFilterType } = useHotelsFilterTypeContext()

    const getUniqueAreas = () => {
        if (!loadedHotels) return []
        return [...new Set(loadedHotels.ids.map(id => loadedHotels.entities[id].area))]
    }

    const selectOption = (selectedArea, isChecked) => {
        if (isChecked) {
            setFilterType(prev => ({ ...prev, area: [...prev.area, selectedArea] }))
        } else {
            const area = filterType.stars.filter(item => item !== selectedArea)
            setFilterType(prev => ({ ...prev, area }))
        }
    }

    const areas = getUniqueAreas()

    return (
        <div className="filter-item">
            <div className="filter-item-top" onClick={() => setIsOpen(prev => !prev)}>
                <h2>Area and Directions</h2>
                <i className={`fa-solid fa-square-${isOpen ? 'minus' : 'plus'}`}></i>
            </div>
            <div className={`filter-item-content ${isOpen && 'open'}`}>
                <div className="star-options">
                    <button className='star-option' onClick={() => setIsSelectedAll(true)}>Select All</button>
                    <span>|</span>
                    <button className='star-option' onClick={() => setIsSelectedAll(false)}>Clear</button>
                    <div className="areas">
                        {areas?.map((area, index) => {
                            return <div className="area-block" key={index}>
                                {isSelectedAll ?
                                    <input type="checkbox" checked={isSelectedAll} data-testid={area} />
                                    :
                                    <input type="checkbox" onChange={(e) => selectOption(area, e.target.checked)} data-testid={area} />
                                }
                                <p>{area?.[0].toUpperCase() + area?.slice(1)}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AreaFilters
