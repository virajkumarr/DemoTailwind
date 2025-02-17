import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NewComer from './newcomer'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    < NewComer />
  </StrictMode>,
)
