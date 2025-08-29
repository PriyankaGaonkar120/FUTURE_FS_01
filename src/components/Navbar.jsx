import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkStyle = {
    padding: '0.6rem 1.2rem',
    borderRadius: '12px',
    color: 'white',
    fontWeight: '600',
    textDecoration: 'none',
    transition: '0.3s',
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#4B0082', 
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
  }

  const activeStyle = {
    backgroundColor: '#9966CC', // Amethyst when active
    color: '#fff',
    fontWeight: '700'
  }

  return (
    <nav style={{
      padding: '1rem 2rem',
      backgroundColor: '#fdfdfdff', // Royal Violet for navbar background
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: "'Poppins', sans-serif'"
    }}>
      <h1 style={{ 
        color: '#2b024c', 
        fontWeight: 'bold', 
        fontSize: '1.6rem',
        fontFamily: "'Poppins', sans-serif",
        transition: '0.3s',
        cursor: 'pointer',
        fontFamily: "'Brush Script MT', cursive",
      }}
        onMouseOver={e => e.target.style.color = '#a98bc2'} // Gold Accent on hover
        onMouseOut={e => e.target.style.color = '#2b024c'}
      >
        Priyanka Gaonkar
      </h1>

      <div style={{ display: 'flex', gap: '1rem' }}>
        {["Home", "Skills", "Projects", "Achievements", "Contact"].map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
            onMouseOver={e => e.target.style.backgroundColor = '#E6E6FA'} // Lavender on hover
            onMouseOut={e => e.target.style.backgroundColor = '#4B0082'} // reset to Dark Purple
          >
            {item}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
