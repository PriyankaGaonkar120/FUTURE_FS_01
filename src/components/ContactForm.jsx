import { useState } from 'react'

function ContactForm() {
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
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      {submitted && <p style={{ color: 'green' }}>Message sent successfully!</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={{ width: '100%', margin: '0.5rem 0', padding: '0.5rem' }}/>
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required style={{ width: '100%', margin: '0.5rem 0', padding: '0.5rem' }}/>
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required style={{ width: '100%', margin: '0.5rem 0', padding: '0.5rem' }} rows="4"></textarea>
        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#4B0082', color: 'white', border: 'none', borderRadius: '4px' }}>Send</button>
      </form>
    </div>
  )
}

export default ContactForm
