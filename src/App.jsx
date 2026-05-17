import React, { useState, useEffect, useCallback } from 'react'
import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'

const pages = ['about', 'projects', 'experience'];

function App() {
  const [activePage, setActivePage] = useState('about');
  const [dragStartX, setDragStartX] = useState(null);

  const navigateTo = useCallback((direction) => {
    setActivePage((current) => {
      const currentIndex = pages.indexOf(current);
      if (direction === 'next' && currentIndex < pages.length - 1) {
        return pages[currentIndex + 1];
      }
      if (direction === 'prev' && currentIndex > 0) {
        return pages[currentIndex - 1];
      }
      return current;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') navigateTo('next');
      if (e.key === 'ArrowLeft') navigateTo('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateTo]);

  const handleMouseDown = (e) => setDragStartX(e.clientX);
  const handleTouchStart = (e) => setDragStartX(e.touches[0].clientX);

  const handleDragEnd = (endX) => {
    if (dragStartX === null) return;
    const diff = dragStartX - endX;
    if (diff > 50) navigateTo('next');
    if (diff < -50) navigateTo('prev');
    setDragStartX(null);
  };

  return (

    <div 
      className="container"
      onMouseDown={handleMouseDown}
      onMouseUp={(e) => handleDragEnd(e.clientX)}
      onTouchStart={handleTouchStart}
      onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
    >
      <div className="glass-container">
        <div className="content-wrapper">
          <div className={`sliding-container ${activePage}`}>
            <div className="page-item"><About /></div>
            <div className="page-item"><Projects /></div>
            <div className="page-item"><Experience /></div>
          </div>
        </div>

        <div className="carousel-dots">
          <span onClick={() => setActivePage('about')} className={`dot ${activePage === 'about' ? 'active' : ''}`}></span>
          <span onClick={() => setActivePage('projects')} className={`dot ${activePage === 'projects' ? 'active' : ''}`}></span>
          <span onClick={() => setActivePage('experience')} className={`dot ${activePage === 'experience' ? 'active' : ''}`}></span>
        </div>
      </div>

      <div className="social-footer">
        <a href="https://github.com/barelysomethin" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:barelyfayz@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/fayz-719383394" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  )
}

export default App



