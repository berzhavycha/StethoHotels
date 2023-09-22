import React, { useState } from 'react'
import './AreaFilters.css'
import { useHotelsFilterTypeContext } from '../../../../context/HotelsFilter/HotelsFilterProvider'

const AreaFilters = ({ loadedHotels }) => {
    const [isOpen, setIsOpen] = useState(true)
    const [isSelectedAll, setIsSelectedAll] = useState(false)
    const { filterType, setFilterType } = useHotelsFilterTypeContext()

    let hotelsAreas
    if (loadedHotels) {
        hotelsAreas = loadedHotels?.ids.map(id => loadedHotels?.entities[id].area)
            .reduce((acc, item) => {
                if (!acc.includes(item)) {
                    acc.push(item)
                }

                return acc
            }, [])
    }

    const selectOption = (e) => {
        const selectedArea = e.target.parentElement.lastChild.textContent.toLowerCase()


        if (e.target.checked) {
            setFilterType(prev => ({ ...prev, area: [...prev.area, selectedArea] }))

        } else {
            const area = filterType.stars.filter(item => item !== selectedArea)
            setFilterType(prev => ({ ...prev, area }))
        }
    }


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
                        {hotelsAreas?.map((area, index) => {
                            return <div className="area-block">
                                {isSelectedAll ?
                                    <input type="checkbox" checked={isSelectedAll} data-testid={area} />
                                    :
                                    <input type="checkbox" onChange={selectOption} data-testid={area} />
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
