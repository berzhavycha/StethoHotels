import '@testing-library/jest-dom'
import '@testing-library/jest-dom';
import "whatwg-fetch";
import { apiSlice } from '../src/api/apiSlice';
import { server } from '../src/mock/api/server'
import { enableFetchMocks } from 'jest-fetch-mock'
import {configureStore} from '@reduxjs/toolkit'
enableFetchMocks();

global.matchMedia = global.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    }
}

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat(apiSlice.middleware),
})

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
    store.dispatch(apiSlice.util.resetApiState());
});

afterAll(() => server.close());