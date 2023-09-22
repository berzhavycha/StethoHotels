import React from 'react'
import { render } from "@testing-library/react"
import { MemoryRouter, Route, Routes, RouterProvider, createMemoryRouter, createRoutesFromElements } from "react-router-dom"
import { Provider } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import DropdownProvider from "./context/Dropdown/DropdownProvider"
import Layout from './common/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import HeaderLayout from './common/HeaderLayout/HeaderLayout'
import Gallery from './components/Gallery/Gallery'
import Destinations from './components/Destinations/Destinations'
import DestinationDetail, { loader as destinationDetailLoader } from './components/Destinations/DestinationDetail/DestinationDetail'
import BlogLayout, { loader as blogLayoutLoader } from './common/BlogLayout/BlogLayout'
import Blog from './components/Blog/Blog'
import BlogSingal from './components/BlogSingal/BlogSingal'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import AuthRequired from './common/AuthRequired/AuthRequired'
import FaqLayout from './components/FaqLayout/FaqLayout'
import HotelListing, { loader as hotelListingLoader } from './components/HotelListing/HotelListing'
import HotelDetail, { loader as hotelDetailLoader } from './components/HotelDetail/HotelDetail'
import ContactUs from './components/ContactUs/ContactUs'
import NotFound from './common/NotFound/NotFound'
import HotelsFilterProvider from './context/HotelsFilter/HotelsFilterProvider'
import { UserProvider } from './context/User/UserProvider'


export const renderWithWrapper = (initialEntries = ['/'], store) => {

    const router = createMemoryRouter(createRoutesFromElements(
        <>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route element={<HeaderLayout />}>
                    <Route path='about' element={<About />} />
                    <Route path='gallery' element={<Gallery />} />
                    <Route path='destinations' element={<Destinations />} />
                    <Route
                        path='destinations/:cityId'
                        element={<DestinationDetail />}
                        loader={destinationDetailLoader}
                    />
                    <Route
                        path='blog'
                        element={<BlogLayout />}
                        loader={blogLayoutLoader}
                        errorElement={<h1>Error</h1>}
                    >
                        <Route index element={<Blog />} />
                        <Route path=':blogId' element={<AuthRequired />}>
                            <Route index element={<BlogSingal />} />
                        </Route>
                    </Route>
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='faq' element={<FaqLayout />} />
                    <Route path='hotels' element={<HotelListing />} loader={hotelListingLoader} />
                    <Route path='hotels/:hotelId' element={<HotelDetail />} loader={hotelDetailLoader} />
                    <Route path='contactus' element={<ContactUs />} />
                </Route>
            </Route>
            <Route path='*' element={<NotFound />} />
        </>
    ),
        { initialEntries }
    )

    return render(
        <Provider store={store}>
            <DropdownProvider>
                <UserProvider>
                    <HotelsFilterProvider>
                        <RouterProvider router={router} />
                    </HotelsFilterProvider>
                </UserProvider>
            </DropdownProvider>
        </Provider>
    )
}


export function renderWithProviders(
    ui,
    store
) {

    setupListeners(store.dispatch);

    return {
        store, ...render(
            <Provider store={store}>
                <MemoryRouter>
                    <HotelsFilterProvider>
                        <DropdownProvider>
                            {ui}
                        </DropdownProvider>
                    </HotelsFilterProvider>
                </MemoryRouter>
            </Provider>
        )
    }
}