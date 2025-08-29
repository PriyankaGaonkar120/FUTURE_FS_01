import projects from '../data/projectsData.js'
import ProjectCard from '../components/ProjectCard.jsx'

function Projects() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#f8f8f8' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Projects</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem'
      }}>
        {projects.map((proj, idx) => <ProjectCard key={idx} {...proj} />)}
      </div>
    </div>
  )
}

export default Projects
