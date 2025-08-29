import skills from '../data/skillsData.js'

function Skills() {
  return (
    <div style={{ 
      padding: '4rem 2rem', 
      textAlign: 'center', 
      backgroundColor: '#FFFFFF', // White background
      minHeight: '100vh',
      color: '#4B0082' // Dark Purple text
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#4B0082' }}>My Skills</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem'
      }}>
        {skills.map((skill, idx) => (
          <div key={idx} style={{
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            backgroundColor: '#E6E6FA', // Light lavender card
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            fontWeight: '500',
            minWidth: '120px',
            transition: '0.3s',
            cursor: 'default',
            color: '#4B0082' // Dark Purple text
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#D8BFD8'} // Slightly darker lavender hover
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#E6E6FA'}
          onMouseOverCapture={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOutCapture={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
