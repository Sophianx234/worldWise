import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CitiesProvider } from './contexts/CitiesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CitiesProvider>
    <App />
    </CitiesProvider>
  </React.StrictMode>,
)
