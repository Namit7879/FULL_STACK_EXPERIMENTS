export default function Services() {
  const services = [
    { id: 1, name: 'Web Development', description: 'Building modern web applications' },
    { id: 2, name: 'UI/UX Design', description: 'Creating beautiful and intuitive interfaces' },
    { id: 3, name: 'Backend Development', description: 'Server-side development and databases' },
    { id: 4, name: 'Mobile App Development', description: 'Cross-platform mobile applications' },
  ]

  return (
    <div className="page-container">
      <h1>Our Services</h1>
      <p>We offer a wide range of services to help you build amazing applications.</p>
      
      <div style={{ marginTop: '2rem' }}>
        {services.map((service) => (
          <div key={service.id} style={{
            padding: '1rem',
            marginBottom: '1rem',
            backgroundColor: '#f9f9f9',
            borderLeft: '4px solid #3498db',
            borderRadius: '4px'
          }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>{service.name}</h3>
            <p style={{ color: '#666' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
