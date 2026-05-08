import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// Import Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
// Prevent Font Awesome from automatically adding CSS to the page
config.autoAddCss = false

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
