import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import Team from './pages/Team'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">ProSPA</div>
            <ul className="nav-menu">
              <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
              <li><NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Products</NavLink></li>
              <li><NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink></li>
              <li><NavLink to="/team" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Team</NavLink></li>
              <li><NavLink to="/pricing" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Pricing</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink></li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>About</h4>
              <p>A modern multi-page SPA built with React Router showcasing best practices in client-side routing and professional UI/UX design.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/pricing">Pricing</NavLink></li>
                <li><NavLink to="/team">Our Team</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 MultiSPA. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
