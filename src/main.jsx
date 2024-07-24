import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CitiesProvider } from './contexts/CitiesContext.jsx'
import { AuthProvider } from './contexts/AuthenticationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <CitiesProvider>
    <App />
    </CitiesProvider>
    </AuthProvider>
  </React.StrictMode>,
)
