import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import './App.css';

import './App.css';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Background video */}
      <video autoPlay loop muted className="video-bg">
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="overlay" />

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-dc">DC</span>
          <span className="logo-cable">CABLE</span>
          <div className="logo-sub">AUTHORIZED CONTRACTOR</div>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="section">
      <h1><span class="pulse-dot" /> DC Cable: Powering Possibilities</h1>
      
      
      
      
      <div class="highlights">
  <div class="highlight-box">
    <h4>✅ OSHA Certified</h4>
  </div>
  <div class="highlight-box">
    <h4>🛠️ Aerial Installation</h4>
    <p>High-pole cable routing</p>
  </div>
  <div class="highlight-box">
    <h4>📍 Based in Florida</h4>
  </div>
  <div class="highlight-box">
    <h4>🚜 Underground Runs</h4>
    <p>Protected installations</p>
  </div>
  <div class="highlight-box">
    <h4>🔌 Fiber Splicing</h4>
    <p>Precision for high-speed networks</p>
  </div>
  <div class="highlight-box">
    <h4>📡 Coax Maintenance</h4>
    <p>Reliable coax support</p>
  </div>
  <div class="highlight-box">
    <h4>⏱ Over 10 Years Experience</h4>
  </div>
</div>



      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
  <h2>Contact Us</h2>
  <p>
    📧 <a href="mailto:info@dccable.com" className="contact-link">info@dccable.com</a>
  </p>
  <p>
    📞 <a href="tel:+15551234567" className="contact-link">+1 (555) 123-4567</a>
  </p>
</section>


      {/* Gallery Section */}
      <section id="gallery" className="section">
        <h2>Project Gallery</h2>
        <p>[Your beautiful project pictures go here]</p>
      </section>
    </div>
  );
}

export default App;






