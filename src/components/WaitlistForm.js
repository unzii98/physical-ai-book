import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './WaitlistForm.module.css';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Save to LocalStorage
    const entry = { email, timestamp: Date.now() };
    const existing = JSON.parse(localStorage.getItem('waitlist') || '[]');
    localStorage.setItem('waitlist', JSON.stringify([...existing, entry]));
    
    setStatus('success');
    setEmail('');
  };

  return (
    <div className={clsx('glass-panel', styles.container)}>
      <h3 className={styles.heading}>Join the Waitlist</h3>
      <p className={styles.subtext}>Get notified when the course launches.</p>

      {status === 'success' ? (
        <div className={styles.success}>
          ✅ You're on the list!
          <button 
            onClick={() => setStatus('idle')}
            className={styles.linkButton}
          >
            Add another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="button button--primary button--block"
          >
            {status === 'loading' ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      )}
    </div>
  );
}