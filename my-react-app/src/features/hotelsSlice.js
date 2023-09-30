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
            },
            providesTags: ['Hotels'],
            keepUnusedDataFor: 30
        }),
        updateReview: builder.mutation({
            query: ({ hotelId, reviews }) => ({
                url: `hotels/${hotelId}`,
                method: 'PATCH',
                body: { reviews }
            }),
            invalidatesTags: ['Hotels']
        })
    })
})

export const { useGetHotelsQuery, useUpdateReviewMutation } = extendedApiSlice

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