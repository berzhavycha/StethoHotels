import React, { createContext, useContext, useState } from 'react'
import { dropdown } from '../../data'

const DropdownContext = createContext()

const DropdownProvider = ({ children }) => {

  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [page, setPage] = useState({ link: '', dropdownLinks: [] })
  const [location, setLocation] = useState({})
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openDropdown = (link, coords) => {
    const page = dropdown.find(item => item.link === link)
    setPage(page)
    setLocation(coords)

    setDropdownOpen(true)
  }

  const closeDropdown = () => {
    setDropdownOpen(false)
  }

  const toggleDisplayMenu = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <DropdownContext.Provider
      value={
        {
          isDropdownOpen,
          openDropdown,
          closeDropdown,
          page,
          location,
          toggleDisplayMenu,
          setIsMenuOpen,
          isMenuOpen
        }
      }
    >
      {children}
    </DropdownContext.Provider>
  )
}

export const useDropdownContext = () => {
  return useContext(DropdownContext)
}

export default DropdownProvider
