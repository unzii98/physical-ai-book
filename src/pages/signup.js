import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from '../css/auth.module.css';

export default function SignUp() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sign Up Attempt:\nName: ${formData.name}\nEmail: ${formData.email}\n(Auth backend not implemented yet)`);
  };

  return (
    <Layout title="Sign Up" description="Create a new account">
      <div className={styles.container}>
        <div className={clsx('glass-panel', styles.authCard)}>
          <h1 className={clsx('gradient-text', styles.title)}>Create Account</h1>
          <p className={styles.subtitle}>Join thousands of engineers mastering Physical AI.</p>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">Full Name</label>
              <input 
                className={styles.input}
                type="text" 
                id="name" 
                name="name" 
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">Email Address</label>
              <input 
                className={styles.input}
                type="email" 
                id="email" 
                name="email" 
                placeholder="name@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="password">Password</label>
              <input 
                className={styles.input}
                type="password" 
                id="password" 
                name="password" 
                placeholder="Create a strong password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            
            <button type="submit" className={clsx('button button--primary', styles.submitButton)}>
              Get Started
            </button>
          </form>

          <div className={styles.footer}>
            Already have an account? <Link to="/signin" className={styles.link}>Sign in</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
