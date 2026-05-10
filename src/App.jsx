import React, { useState } from 'react'
import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {
  const [activePage, setActivePage] = useState('about')

  return (

    <div className="container">
      <div className="glass-container">
        <nav className="navbar">
          <button onClick={() => setActivePage('about')} className={activePage === 'about' ? 'active' : ''}>About</button>
          <button onClick={() => setActivePage('projects')} className={activePage === 'projects' ? 'active' : ''}>Projects</button>
          <button onClick={() => setActivePage('experience')} className={activePage === 'experience' ? 'active' : ''}>Experience</button>
        </nav>
        
        <div className="content-wrapper">
          <div className={`sliding-container ${activePage}`}>
            <div className="page-item"><About /></div>
            <div className="page-item"><Projects /></div>
            <div className="page-item"><Experience /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App



