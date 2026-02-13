import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Welcome to MultiSPA</h1>
        <p>A comprehensive multi-page Single Page Application built with React Router</p>
      </div>

      <div className="content-section">
        <h2>What is a Multi-Page SPA?</h2>
        <p>
          A multi-page Single Page Application uses client-side routing to display different pages
          without reloading the entire application. This provides a fast, seamless user experience
          with instant page transitions.
        </p>
      </div>

      <div className="cards-grid">
        <div className="card">
          <div className="card-icon">⚡</div>
          <h3>Fast Navigation</h3>
          <p>Instant page transitions without server requests or page reloads.</p>
          <Link to="/products" className="btn">Explore Products</Link>
        </div>
        <div className="card">
          <div className="card-icon">🎯</div>
          <h3>Multiple Routes</h3>
          <p>Navigate between different pages seamlessly using React Router.</p>
          <Link to="/services" className="btn">View Services</Link>
        </div>
        <div className="card">
          <div className="card-icon">🚀</div>
          <h3>Modern Tech Stack</h3>
          <p>Built with React, React Router DOM, and modern web technologies.</p>
          <Link to="/team" className="btn">Meet Our Team</Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Key Features</h2>
        <ul className="feature-list">
          <li>Client-side routing with React Router DOM</li>
          <li>Smooth page transitions with animations</li>
          <li>Active route highlighting in navigation</li>
          <li>Full browser history support</li>
          <li>Fast performance and zero page reloads</li>
          <li>Responsive and mobile-friendly design</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Get Started</h2>
        <p>
          Use the navigation menu at the top to explore different pages. Notice how all navigation
          happens instantly without any page reload or server delay. The active menu item is
          automatically highlighted based on your current location.
        </p>
      </div>
    </div>
  )
}
