export default function Services() {
  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices'
    },
    {
      id: 2,
      icon: '🎓',
      title: 'Training & Consulting',
      description: 'Expert guidance and training programs for your development team'
    },
    {
      id: 3,
      icon: '🔧',
      title: 'Technical Support',
      description: '24/7 technical support and maintenance services'
    },
    {
      id: 4,
      icon: '📱',
      title: 'Mobile Solutions',
      description: 'Cross-platform mobile applications for iOS and Android'
    },
    {
      id: 5,
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interface design services'
    },
    {
      id: 6,
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Optimize your application for speed and efficiency'
    }
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>Professional services to help your business succeed</p>
      </div>

      <div className="cards-grid">
        {services.map((service) => (
          <div key={service.id} className="card">
            <div className="card-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="btn">Get Started</button>
          </div>
        ))}
      </div>

      <div className="content-section">
        <h2>Our Service Process</h2>
        <ol className="feature-list">
          <li>Initial consultation and requirement gathering</li>
          <li>Detailed project planning and timeline</li>
          <li>Development and continuous communication</li>
          <li>Testing and quality assurance</li>
          <li>Deployment and post-launch support</li>
        </ol>
      </div>

      <div className="content-section">
        <h2>Quality Assurance</h2>
        <p>
          We are committed to delivering high-quality services that exceed your expectations.
          Every project goes through rigorous testing and quality checks to ensure perfection.
        </p>
      </div>
    </div>
  )
}
