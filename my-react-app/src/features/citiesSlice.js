import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";


export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllCities: builder.query({
            query: () => '/cities'
        }),
        getCity: builder.query({
            query: ({id}) => `/cities/${id}`,
        })
    })
})

export const { useGetAllCitiesQuery, useGetCityQuery } = extendedApiSlice
