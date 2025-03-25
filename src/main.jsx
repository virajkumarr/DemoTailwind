import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App'
// import AdminDashboard from './admin'
// import Admintaxfile from './admintaxfile'
import App from './App'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    < App />
    {/* <Admintaxfile /> */}
  </StrictMode>,
)
