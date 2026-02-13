export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: 'Starter',
      price: 29,
      description: 'Perfect for individuals and small projects',
      features: [
        'Basic features',
        'Community support',
        'Up to 5 projects',
        'Documentation access',
        'Monthly updates'
      ]
    },
    {
      id: 2,
      name: 'Professional',
      price: 79,
      description: 'Ideal for growing teams',
      features: [
        'All Starter features',
        'Priority support',
        'Unlimited projects',
        'Advanced tools',
        'API access',
        'Weekly updates'
      ],
      featured: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 199,
      description: 'For large-scale operations',
      features: [
        'All Professional features',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'Unlimited team members',
        'Real-time updates'
      ]
    }
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>Pricing Plans</h1>
        <p>Choose the perfect plan for your needs</p>
      </div>

      <div className="pricing-table">
        {plans.map((plan) => (
          <div key={plan.id} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
            <div className="pricing-name">{plan.name}</div>
            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
              {plan.description}
            </div>
            <div className="pricing-price">
              ${plan.price}<span>/month</span>
            </div>
            <button className="btn" style={{ width: '100%', marginBottom: '1.5rem' }}>
              Get Started
            </button>
            <ul className="pricing-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="content-section">
        <h2>Frequently Asked Questions</h2>
        <div style={{ marginTop: '1.5rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Can I change my plan later?</h3>
            <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Is there a free trial?</h3>
            <p>Absolutely! All plans come with a 14-day free trial. No credit card required.</p>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
          </div>
          <div>
            <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Is there a discount for annual billing?</h3>
            <p>Yes! Get 20% off when you choose annual billing instead of monthly.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
