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
      
      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3 className="service-title">{service.name}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
