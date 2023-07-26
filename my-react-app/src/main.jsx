import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DropdownProvider from './context/DropdownProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DropdownProvider>
      <App />
    </DropdownProvider>
  </React.StrictMode>,
)
