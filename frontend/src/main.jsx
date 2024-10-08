import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DarkMode from './components/DarkMode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkMode>
      <App />
    </DarkMode>
  </React.StrictMode>,
)
