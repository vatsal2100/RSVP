import React, { useState } from 'react';
import EventDetailsForm from './components/EventDetailsForm';
import RSVPForm from './components/RSVPForm';

export default function App() {
  const [event, setEvent] = useState(null);

  return (
    <div style={styles.appBg}>
      <div style={styles.container}>
        {!event ? (
          <EventDetailsForm onCreate={setEvent} />
        ) : (
          <RSVPForm event={event} />
        )}
      </div>
    </div>
  );
}

const styles = {
  appBg: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    padding: 0,
    margin: 0
  },
  container: {
    maxWidth: 540,
    margin: '40px auto',
    padding: 32,
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 6px 32px rgba(30,60,114,0.08)'
  }
};
