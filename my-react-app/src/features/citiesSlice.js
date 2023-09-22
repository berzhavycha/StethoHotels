import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";


export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCity: builder.query({
            query: ({id}) => `/cities/${id}`,
        })
    })
})

export const { useGetCityQuery } = extendedApiSlice
