import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import WaitlistForm from '../components/WaitlistForm';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1" className="hero__title gradient-text">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/robotic-nervous-system/nodes-topics-services">
                Start Reading
              </Link>
              <div style={{ width: '1rem' }} />
              <Link
                className="button button--secondary button--lg"
                to="/about">
                About Author
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    title: 'Module 1: Robotic Nervous System',
    description: 'ROS 2 Nodes, Topics, Services, Python Agents & URDF.',
    link: '/docs/robotic-nervous-system/nodes-topics-services',
  },
  {
    title: 'Module 2: The Digital Twin',
    description: 'Gazebo Physics, Unity Rendering & Sensor Simulation.',
    link: '/docs/digital-twin-sim/gazebo-physics',
  },
  {
    title: 'Module 3: The AI-Robot Brain',
    description: 'NVIDIA Isaac Sim, Isaac ROS (VSLAM) & Nav2.',
    link: '/docs/ai-robot-brain/isaac-sim-sdg',
  },
  {
    title: 'Module 4: Vision-Language-Action',
    description: 'Voice (Whisper), LLM Planning & Capstone Project.',
    link: '/docs/vla-robotics/voice-whisper',
  },
];

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="card glass-panel h-100 feature-card">
          <div className="card__header">
            <Heading as="h3">{title}</Heading>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
          <div className="card__footer">
            <span className="button button--secondary button--sm button--block">
              Explore Module →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Physical AI & Humanoid Robotics Book">
      <HomepageHeader />
      <main>
        <section className={styles.features} style={{ padding: '4rem 0' }}>
          <div className="container">
            <div className="row justify-center">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        
        <section style={{ padding: '6rem 0', background: 'transparent' }}>
          <div className="container">
            <div className="text--center margin-bottom--lg">
              <Heading as="h2" className="gradient-text" style={{ fontSize: '2.5rem' }}>Join the Community</Heading>
              <p className="hero__subtitle" style={{ fontSize: '1.2rem', opacity: 0.8 }}>Get early access to new chapters and exclusive webinars.</p>
            </div>
            <div className="row">
              <div className="col col--6 col--offset-3">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
