import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WeatherContext from './utils/WeatherContext.jsx'
createRoot(document.getElementById('root')).render(
    <WeatherContext>
        <App />
    </WeatherContext>
)
