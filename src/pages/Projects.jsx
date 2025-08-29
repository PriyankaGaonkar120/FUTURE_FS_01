import projects from '../data/projectsData.js'

function Projects() {
  return (
    <div style={{ 
      padding: '4rem 2rem', 
      textAlign: 'center', 
      backgroundColor: '#FFFFFF', // White background
      minHeight: '100vh',
      color: '#4B0082' // Dark Purple text
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#4B0082' }}>Projects</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem'
      }}>
        {projects.map((proj, idx) => (
          <div key={idx} style={{
            width: '250px',
            padding: '1.5rem',
            borderRadius: '8px',
            backgroundColor: '#E6E6FA', // Light lavender card
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: '0.3s',
            textAlign: 'center',
            cursor: 'pointer',
            color: '#4B0082' // Dark Purple text
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.backgroundColor = '#D8BFD8'; // Slightly darker lavender hover
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.backgroundColor = '#E6E6FA';
          }}
          >
            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#4B0082' }}>{proj.title}</h3>
            <p style={{ marginBottom: '1rem', color: '#4B0082' }}>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{
              color: '#4B0082',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: '0.3s'
            }}
            onMouseOver={e => e.target.style.color = '#D8BFD8'}
            onMouseOut={e => e.target.style.color = '#4B0082'}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
