import { createEntityAdapter, createSlice, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const userAdapter = createEntityAdapter()
const initialState = userAdapter.getInitialState()

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        signUp: (state, action) => {
            return action.payload
        },
        logOut: (state, action) => {
            return null
        },
        logIn: (state, action) => {
            return action.payload
        }
    }
})

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addUser: builder.mutation({
            query: (user) => ({
                url: 'users',
                method: 'POST',
                body: user
            })
        }),
        getUsers: builder.query({
            query: () => '/users',
            transformResponse: (response) => {
                return userAdapter.setAll(initialState, response)
            }
        })
    })
})

export const { signUp, logOut, logIn } = userSlice.actions
export default userSlice.reducer

export const { useAddUserMutation, useGetUsersQuery } = extendedApiSlice

export const selectUsersResult = extendedApiSlice.endpoints.getUsers.select()

const selectUsersData = createSelector(
    selectUsersResult,
    userResult => userResult.data
)

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUsersIds,
} = userAdapter.getSelectors(state => selectUsersData(state) ?? initialState)