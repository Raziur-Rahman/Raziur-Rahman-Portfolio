import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// snap-y snap-mandatory scroll-smooth 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='snap-y snap-mandatory scroll-smooth bg-[#0c0c1d]'>
      <App />
    </div>
  </React.StrictMode>,
)
