import achievements from '../data/achievementsData.js'

function Achievements() {
  return (
    <div style={{ 
      padding: '4rem 2rem', 
      textAlign: 'center', 
      backgroundColor: '#FFFFFF', // White background
      minHeight: '100vh', 
      color: '#4B0082' // Dark Purple text
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#4B0082' }}>Achievements</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {achievements.map((ach, idx) => (
          <li 
            key={idx} 
            style={{
              backgroundColor: '#E6E6FA', // Light lavender card background
              padding: '1rem 1.5rem',
              marginBottom: '1rem',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              fontWeight: '500',
              transition: '0.3s',
              cursor: 'pointer',
              color: '#4B0082' // Dark Purple text inside card
            }}
            onMouseOver={e => e.target.style.backgroundColor = '#D8BFD8'} // Slightly darker lavender on hover
            onMouseOut={e => e.target.style.backgroundColor = '#E6E6FA'}
          >
            {ach}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Achievements
