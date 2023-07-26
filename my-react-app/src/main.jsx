import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DropdownProvider from './context/Dropdown/DropdownProvider.jsx'
import { UserProvider } from './context/User/UserProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <DropdownProvider>
        <App />
      </DropdownProvider>
    </UserProvider>
  </React.StrictMode>,
)
