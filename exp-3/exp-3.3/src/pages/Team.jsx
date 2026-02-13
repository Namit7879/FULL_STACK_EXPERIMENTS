export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'Lead Developer',
      emoji: '👩‍💼',
      bio: 'Expert in React and modern web technologies'
    },
    {
      id: 2,
      name: 'Bob Smith',
      role: 'UI/UX Designer',
      emoji: '👨‍🎨',
      bio: 'Creating beautiful and intuitive user experiences'
    },
    {
      id: 3,
      name: 'Carol Davis',
      role: 'Full Stack Engineer',
      emoji: '👩‍💻',
      bio: 'Specialist in frontend and backend development'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'DevOps Engineer',
      emoji: '👨‍💻',
      bio: 'Infrastructure and deployment specialist'
    },
    {
      id: 5,
      name: 'Emma Brown',
      role: 'QA Tester',
      emoji: '👩‍🔬',
      bio: 'Ensuring quality and reliability of our products'
    },
    {
      id: 6,
      name: 'Frank Miller',
      role: 'Project Manager',
      emoji: '👨‍📈',
      bio: 'Leading teams and delivering on time'
    }
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>Our Team</h1>
        <p>Meet the talented people behind MultiSPA</p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <div className="team-member-avatar">{member.emoji}</div>
            <div className="team-member-info">
              <div className="team-member-name">{member.name}</div>
              <div className="team-member-role">{member.role}</div>
              <div className="team-member-bio">{member.bio}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="content-section">
        <h2>About Our Team</h2>
        <p>
          Our team consists of experienced professionals with expertise in various areas of web development,
          design, and project management. We are passionate about creating exceptional digital solutions
          and helping our clients achieve their business goals.
        </p>
        <p>
          With combined experience of over 100 years in the industry, we bring best practices, innovation,
          and dedication to every project we undertake.
        </p>
      </div>

      <div className="content-section">
        <h2>Our Values</h2>
        <ul className="feature-list">
          <li>Excellence in every project and deliverable</li>
          <li>Customer satisfaction is our top priority</li>
          <li>Continuous learning and improvement</li>
          <li>Collaboration and teamwork</li>
          <li>Innovation and forward-thinking approach</li>
        </ul>
      </div>
    </div>
  )
}
