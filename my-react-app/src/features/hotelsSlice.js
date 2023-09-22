import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

import { apiSlice } from "../api/apiSlice";


const hotelsAdapter = createEntityAdapter()

const initialState = hotelsAdapter.getInitialState()


export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getHotels: builder.query({
            query: () => '/hotels',
            transformResponse: (responseData) => {
                return hotelsAdapter.setAll(initialState, responseData)
            }
        })
    })
})

export const { useGetHotelsQuery } = extendedApiSlice

const selectHotelsResult = extendedApiSlice.endpoints.getHotels.select()

const selectHotelsData = createSelector(
    selectHotelsResult,
    (result) => result.data
)

export const {
    selectAll: selectAllHotels,
    selectById: selectHotelById,
    selectIds: selectHotelsIds
} = hotelsAdapter.getSelectors(state => selectHotelsData(state) ?? initialState)