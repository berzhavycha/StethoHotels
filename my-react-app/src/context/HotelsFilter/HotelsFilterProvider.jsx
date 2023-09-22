import React, { createContext, useContext, useState } from 'react'

const hotelsFilterContext = createContext()

const HotelsFilterProvider = ({ children }) => {

    const [filterType, setFilterType] = useState({
        price: null,
        stars: [],
        area: []
    })

    return (
        <hotelsFilterContext.Provider value={{ filterType, setFilterType }}>
            {children}
        </hotelsFilterContext.Provider>
    )
}

export const useHotelsFilterTypeContext = () => {
    return useContext(hotelsFilterContext)
}

export default HotelsFilterProvider
