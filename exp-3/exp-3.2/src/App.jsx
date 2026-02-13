import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Main Navigation using NavLink for active state styling */}
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-logo">ActiveState</h1>
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/products" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/blogs" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/dashboard" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        {/* Footer with Link examples */}
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 LinkNav. All rights reserved.</p>
            <div className="footer-links">
              <span>Quick Links: </span>
              <Link to="/" className="footer-link">Home</Link>
              <span> | </span>
              <Link to="/about" className="footer-link">About</Link>
              <span> | </span>
              <Link to="/products" className="footer-link">Products</Link>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
