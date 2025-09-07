import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container section contact-colored">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <div className="section-divider"></div>
        <p style={{ fontSize: '1.1rem', marginTop: '1rem', opacity: 0.9 }}>
          Let's connect and discuss opportunities, projects, or collaborations
        </p>
      </div>
      
      <div className="contact-info">
        <div className="contact-item">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.2rem' }}>Phone</div>
            <div>+91 7993591923</div>
          </div>
        </div>

        <div className="contact-item">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.2rem' }}>Email</div>
            <a href="mailto:monishatg3@gmail.com">monishatg3@gmail.com</a>
          </div>
        </div>

        <div className="contact-item">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
          </svg>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.2rem' }}>LinkedIn</div>
            <a href="https://linkedin.com/in/monisha-tg-b9674b280" target="_blank" rel="noopener noreferrer">
              monisha-tg-b9674b280
            </a>
          </div>
        </div>

        <div className="contact-item">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.2rem' }}>GitHub</div>
            <a href="https://github.com/tgmonisha" target="_blank" rel="noopener noreferrer">
              github.com/tgmonisha
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
