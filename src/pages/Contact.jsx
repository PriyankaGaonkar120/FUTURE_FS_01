import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div style={{ 
      padding: '4rem 2rem', 
      textAlign: 'center',
      backgroundColor: '#FFFFFF', // White background
      minHeight: '100vh',
      color: '#4B0082' // Dark Purple text
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#4B0082' }}>Contact Me</h2>

      {submitted && <p style={{ color: '#4B0082', marginBottom: '1rem' }}>Message sent successfully!</p>}

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          style={{ 
            width: '100%', 
            padding: '0.7rem', 
            marginBottom: '1rem', 
            borderRadius: '6px', 
            border: '1px solid #4B0082',
            backgroundColor: '#E6E6FA', 
            color: '#4B0082',
            transition: '0.3s'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#D8BFD8'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#E6E6FA'}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          style={{ 
            width: '100%', 
            padding: '0.7rem', 
            marginBottom: '1rem', 
            borderRadius: '6px', 
            border: '1px solid #4B0082',
            backgroundColor: '#E6E6FA',
            color: '#4B0082',
            transition: '0.3s'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#D8BFD8'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#E6E6FA'}
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          rows="5" 
          style={{ 
            width: '100%', 
            padding: '0.7rem', 
            marginBottom: '1rem', 
            borderRadius: '6px', 
            border: '1px solid #4B0082',
            backgroundColor: '#E6E6FA',
            color: '#4B0082',
            transition: '0.3s'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#D8BFD8'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#E6E6FA'}
        />
        <button 
          type="submit" 
          style={{
            padding: '0.7rem 1.5rem',
            backgroundColor: '#8A2BE2', // Royal Violet button
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            transition: '0.3s',
            cursor: 'pointer'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#D8BFD8'} // Lavender hover
          onMouseOut={e => e.target.style.backgroundColor = '#8A2BE2'}
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
