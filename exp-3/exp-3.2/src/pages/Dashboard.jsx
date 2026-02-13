import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Dashboard() {
  const [stats] = useState({
    totalVisits: 1250,
    activeUsers: 342,
    pages: 5,
    avgSessionTime: '4m 32s'
  })

  return (
    <div className="page-container">
      <h1>User Dashboard</h1>
      <p>Welcome to your personal dashboard. Here you can track your activity and access your content.</p>

      <h2>Dashboard Statistics</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>Total Visits</h3>
          <p style={{ fontSize: '2rem', color: '#667eea', fontWeight: 'bold' }}>
            {stats.totalVisits.toLocaleString()}
          </p>
          <p style={{ color: '#999', fontSize: '0.9rem' }}>Page views this month</p>
        </div>
        <div className="feature-card">
          <h3>Active Users</h3>
          <p style={{ fontSize: '2rem', color: '#764ba2', fontWeight: 'bold' }}>
            {stats.activeUsers}
          </p>
          <p style={{ color: '#999', fontSize: '0.9rem' }}>Currently online</p>
        </div>
        <div className="feature-card">
          <h3>Total Pages</h3>
          <p style={{ fontSize: '2rem', color: '#667eea', fontWeight: 'bold' }}>
            {stats.pages}
          </p>
          <p style={{ color: '#999', fontSize: '0.9rem' }}>Available sections</p>
        </div>
        <div className="feature-card">
          <h3>Avg Session Time</h3>
          <p style={{ fontSize: '2rem', color: '#764ba2', fontWeight: 'bold' }}>
            {stats.avgSessionTime}
          </p>
          <p style={{ color: '#999', fontSize: '0.9rem' }}>Average user engagement</p>
        </div>
      </div>

      <h2>Quick Navigation</h2>
      <div className="navigation-section">
        <p>Access important sections of your dashboard:</p>
        <div className="link-group">
          <Link to="/products" className="link-example">View Products</Link>
          <Link to="/blogs" className="link-example">Read Articles</Link>
          <Link to="/about" className="link-example">Learn About Us</Link>
        </div>
      </div>

      <h2>Recent Activity</h2>
      <div className="navigation-section">
        <ul style={{ paddingLeft: '2rem', color: '#666' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            Viewed <Link to="/products" className="simple-link">Products</Link> page
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Visited <Link to="/blogs" className="simple-link">Blogs</Link> section
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Explored <Link to="/about" className="simple-link">About</Link> information
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Returned to <Link to="/" className="simple-link">Home</Link> page
          </li>
        </ul>
      </div>

      <div className="navigation-section">
        <h3>Navigation Examples on This Page</h3>
        <p>
          This dashboard demonstrates various uses of the Link component throughout different parts
          of the page. Notice how all links provide instant navigation without page reloads, and the
          active navigation item in the top menu updates automatically.
        </p>
      </div>
    </div>
  )
}
