import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/index.js'
import App from './App.jsx'
// import {Car} from './components/Car.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
