import React, { useState } from 'react'
import './Price.css'
import { useHotelsFilterTypeContext } from '../../../../context/HotelsFilter/HotelsFilterProvider'

const Price = () => {
    const [isOpen, setIsOpen] = useState(true)
    const { filterType, setFilterType } = useHotelsFilterTypeContext()

    const handleChange = e => {
        if (e.target.value === 'Any') {
            setFilterType(prev => ({ ...prev, price: null }))
            return
        }

        setFilterType(prev => ({ ...prev, price: e.target.value }))
    }

    return (
        <div className="filter-item">
            <div className="filter-item-top" onClick={() => setIsOpen(prev => !prev)}>
                <h2>Price</h2>
                <i className={`fa-solid fa-square-${isOpen ? 'minus' : 'plus'}`}></i>
            </div>
            <div className={`filter-item-content ${isOpen && 'open'}`}>
                <select data-testid='select-price' value={filterType.price} onChange={handleChange}>
                    <option value={null}>Any</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="200-300">$200 - $300</option>
                    <option value="300-400">$300 - $400</option>
                    <option value="400-500">$400 - $500</option>
                </select>
            </div>
        </div>
    )
}

export default Price
