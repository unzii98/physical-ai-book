import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from '../css/auth.module.css';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sign In Attempt:\nEmail: ${formData.email}\n(Auth backend not implemented yet)`);
  };

  return (
    <Layout title="Sign In" description="Sign in to your account">
      <div className={styles.container}>
        <div className={clsx('glass-panel', styles.authCard)}>
          <h1 className={clsx('gradient-text', styles.title)}>Welcome Back</h1>
          <p className={styles.subtitle}>Enter your credentials to access the full library.</p>

          <form onSubmit={handleSubmit}>
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
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.5rem'
              }}>
                <label className={styles.label} htmlFor="password" style={{ marginBottom: 0 }}>
                  Password
                </label>

                {/* 🔥 Fixed broken link */}
                <Link to="/resetpassword" style={{ fontSize: '0.85rem' }}>
                  Forgot?
                </Link>
              </div>

              <input 
                className={styles.input}
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={clsx('button button--primary', styles.submitButton)}>
              Sign In
            </button>
          </form>

          <div className={styles.footer}>
            Don’t have an account?{" "}
            <Link to="/signup" className={styles.link}>Sign up</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
