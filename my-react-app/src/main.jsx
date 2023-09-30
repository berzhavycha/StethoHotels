import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistor, store } from './app/store.js';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App.jsx'
import DropdownProvider from './context/Dropdown/DropdownProvider.jsx'
import { UserProvider } from './context/User/UserProvider.jsx'
import HotelsFilterProvider from './context/HotelsFilter/HotelsFilterProvider.jsx'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserProvider>
      <DropdownProvider>
        <HotelsFilterProvider>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </HotelsFilterProvider>
      </DropdownProvider>
    </UserProvider>
  </Provider>
)

