function Home() {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem',
      backgroundColor: 'white', 
      gap: '2rem',
      fontFamily: "'Poppins', sans-serif",
      minHeight: '100vh',
      color: '#4B0082' 
    }}>
      {/* Profile Picture */}
      <div style={{ flex: '1 1 250px', textAlign: 'center' }}>
        <img
          src="/profile.jpg"
          alt="Priyanka Gaonkar"
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            border: '4px solid black', // Gold Accent border
            objectFit: 'cover',
            transition: '0.3s',
            cursor: 'pointer'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>

      {/* About Me */}
      <div style={{ flex: '2 1 400px', maxWidth: '600px', textAlign: 'center' }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          color: '#4B0082', // Amethyst heading
          fontFamily: "'Poppins', sans-serif"
        }}>
          Hi, I'm Priyanka Gaonkar 👋
        </h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#4B0082' }}>
          I'm an aspiring Full Stack Developer passionate about building interactive and beautiful web applications. I love working with React, JavaScript, HTML, and CSS. Welcome to my personal portfolio where you can explore my skills, projects, and achievements!
        </p>
      </div>
    </div>
  )
}

export default Home
