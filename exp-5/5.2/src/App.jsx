
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react'

const lazyWithDelay = (factory, delayMs = 2000) =>
  lazy(() =>
    Promise.all([
      factory(),
      new Promise(resolve => setTimeout(resolve, delayMs))
    ]).then(([module]) => module)
  )

const Home = lazyWithDelay(() => import('./pages/Home'))
const About = lazyWithDelay(() => import('./pages/About'))
const Services = lazyWithDelay(() => import('./pages/Services'))
const Contact = lazyWithDelay(() => import('./pages/Contact'))

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-logo">Exp-5.2</h1>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          {/* Suspense wrapper */}
          <Suspense fallback={<div className="loading">Loading.....</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <footer className="footer">
          <p>&copy; 2026. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App

