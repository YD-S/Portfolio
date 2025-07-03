import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Starfield from 'react-starfield';

// TODO:
//  1. Change text from grey to grey-200
//  2. Github fetch for projects
//  3. Better styling for project cards (the buttons)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Starfield
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }} />
      <App />
  </React.StrictMode>,
)
