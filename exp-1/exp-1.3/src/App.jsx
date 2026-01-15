import { useState } from 'react'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <header className="header">
          <h1>Theme Toggle SPA</h1>
          <button 
            onClick={toggleTheme} 
            className="toggle-btn"
            aria-label="Toggle theme"
          >
            {isDarkMode ? 'Light Mode':'Dark Mode'}
          </button>
        </header>

        <footer className="footer">
          <p>&copy; MADE BY NAMIT SHARMA</p>
        </footer>
      </div>
    </div>
  )
}

export default App
