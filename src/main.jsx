import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// TODO:
//  1. Change text from grey to grey-200
//  2. Github fetch for projects
//  3. Better styling for project cards (the buttons)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
    <App />
  </React.StrictMode>,
)
