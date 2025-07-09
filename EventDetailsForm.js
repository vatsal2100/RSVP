import React, { useState } from 'react';

export default function EventDetailsForm({ onCreate }) {
  const [event, setEvent] = useState({
    name: '', date: '', time: '', location: '', organizerEmail: ''
  });

  const handleChange = e => setEvent({ ...event, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onCreate(event);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles.form}>
      <h2 style={formStyles.heading}>Create Your Event</h2>
      <input style={formStyles.input} name="name" placeholder="Event Name" value={event.name} onChange={handleChange} required />
      <input style={formStyles.input} name="date" type="date" value={event.date} onChange={handleChange} required />
      <input style={formStyles.input} name="time" type="time" value={event.time} onChange={handleChange} required />
      <input style={formStyles.input} name="location" placeholder="Location" value={event.location} onChange={handleChange} required />
      <input style={formStyles.input} name="organizerEmail" type="email" placeholder="Your Email" value={event.organizerEmail} onChange={handleChange} required />
      <button type="submit" style={formStyles.button}>Create RSVP Form</button>
    </form>
  );
}

const formStyles = {
  form: {
    width: '100%',
    maxWidth: 520,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  },
  heading: {
    fontSize: 32,
    fontWeight: 800,
    marginBottom: 12,
    color: '#1e3c72',
    letterSpacing: 1
  },
  input: {
    fontSize: 22,
    padding: '18px 16px',
    borderRadius: 10,
    border: '1.5px solid #cfd8dc',
    marginBottom: 0,
    outline: 'none'
  },
  button: {
    marginTop: 12,
    background: 'linear-gradient(135deg, #27ae60 0%, #1e3c72 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    padding: '20px 0',
    fontWeight: 700,
    fontSize: 24,
    cursor: 'pointer',
    letterSpacing: 1
  }
};
