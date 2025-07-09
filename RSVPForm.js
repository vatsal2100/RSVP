import React, { useState } from 'react';
// import emailjs from 'emailjs-com'; // Uncomment and configure if using EmailJS

export default function RSVPForm({ event }) {
  const [form, setForm] = useState({
    attendance: '', firstName: '', lastName: '', email: '', phone: '', attendees: 1, dietary: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Uncomment and configure EmailJS if you want to send emails
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { ...form, ...event }, 'YOUR_USER_ID')
    //   .then(() => setSubmitted(true))
    //   .catch(err => alert('Failed to send RSVP'));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={styles.success}>
        <h2>Thank you for your RSVP!</h2>
        <p>We have received your response.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>RSVP for {event.name}</h2>
      <div style={styles.eventInfo}>
        <div><b>Date:</b> {event.date}</div>
        <div><b>Time:</b> {event.time}</div>
        <div><b>Location:</b> {event.location}</div>
      </div>
      <div style={styles.radioRow}>
        <label style={styles.radioLabel}>
          <input type="radio" name="attendance" value="Yes" onChange={handleChange} required />
          Yes, I'll be there!
        </label>
        <label style={styles.radioLabel}>
          <input type="radio" name="attendance" value="No" onChange={handleChange} required />
          Can't make it.
        </label>
      </div>
      <input
        style={styles.input}
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
        required
        autoComplete="given-name"
      />
      <input
        style={styles.input}
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
        required
        autoComplete="family-name"
      />
      <input
        style={styles.input}
        name="email"
        type="email"
        placeholder="E-mail"
        value={form.email}
        onChange={handleChange}
        required
        autoComplete="email"
      />
      <input
        style={styles.input}
        name="phone"
        type="tel"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
        autoComplete="tel"
      />
      <input
        style={styles.input}
        name="attendees"
        type="number"
        min="1"
        placeholder="Number of Attendees"
        value={form.attendees}
        onChange={handleChange}
        required
      />
      <input
        style={styles.input}
        name="dietary"
        type="text"
        placeholder="Dietary Requirements (please specify)"
        value={form.dietary}
        onChange={handleChange}
      />
      <textarea
        style={{ ...styles.input, minHeight: 100, resize: 'vertical' }}
        name="message"
        placeholder="Special Requests or Comments"
        value={form.message}
        onChange={handleChange}
      />
      <button type="submit" style={styles.button}>Submit RSVP</button>
    </form>
  );
}

const styles = {
  form: {
    width: '100%',
    maxWidth: 520,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 6px 32px rgba(30,60,114,0.08)',
    padding: '32px 20px'
  },
  heading: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 10,
    color: '#1e3c72'
  },
  eventInfo: {
    marginBottom: 14,
    color: '#2a5298',
    fontSize: 18,
    lineHeight: 1.5
  },
  radioRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 32,
    marginBottom: 8,
    marginTop: 8
  },
  radioLabel: {
    fontSize: 20,
    fontWeight: 500,
    color: '#2a5298',
    display: 'flex',
    alignItems: 'center',
    gap: 8
  },
  input: {
    fontSize: 20,
    padding: '16px 14px',
    borderRadius: 10,
    border: '1.5px solid #cfd8dc',
    outline: 'none'
  },
  button: {
    marginTop: 10,
    background: 'linear-gradient(135deg, #27ae60 0%, #1e3c72 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    padding: '18px 0',
    fontWeight: 700,
    fontSize: 22,
    cursor: 'pointer',
    letterSpacing: 1
  },
  success: {
    maxWidth: 520,
    margin: '40px auto',
    padding: 32,
    background: '#eafaf1',
    borderRadius: 16,
    textAlign: 'center',
    color: '#1e3c72',
    fontSize: 26
  }
};
