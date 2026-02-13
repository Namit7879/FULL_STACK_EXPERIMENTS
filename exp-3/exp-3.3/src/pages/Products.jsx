export default function Products() {
  const products = [
    {
      id: 1,
      name: 'React Pro',
      icon: '⚛️',
      description: 'Complete React development toolkit with advanced features'
    },
    {
      id: 2,
      name: 'Router Master',
      icon: '🗺️',
      description: 'Professional routing solution for complex SPAs'
    },
    {
      id: 3,
      name: 'State Manager',
      icon: '📊',
      description: 'Powerful state management library for large applications'
    },
    {
      id: 4,
      name: 'UI Library',
      icon: '🎨',
      description: 'Beautiful and responsive component library'
    },
    {
      id: 5,
      name: 'API Client',
      icon: '🔌',
      description: 'Lightweight and flexible API client for data fetching'
    },
    {
      id: 6,
      name: 'Dev Tools',
      icon: '🛠️',
      description: 'Essential development tools and utilities'
    }
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Comprehensive solutions for modern web development</p>
      </div>

      <div className="cards-grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="card-icon">{product.icon}</div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button className="btn">Learn More</button>
          </div>
        ))}
      </div>

      <div className="content-section">
        <h2>Why Choose Our Products?</h2>
        <ul className="feature-list">
          <li>Industry-leading performance and reliability</li>
          <li>Comprehensive documentation and support</li>
          <li>Regular updates with new features</li>
          <li>Easy integration with existing projects</li>
          <li>Active community and forum support</li>
          <li>Flexible licensing options</li>
        </ul>
      </div>
    </div>
  )
}
