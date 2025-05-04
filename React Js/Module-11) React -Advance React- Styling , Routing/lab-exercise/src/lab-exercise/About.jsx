import React from 'react'
import './about.css';

const About = () => {
  return (
    <div>
      <div class="about-section">
        <h1>About Us</h1>
        <p>We are a team of passionate developers creating amazing web experiences. Our mission is to deliver quality and innovative solutions for our clients worldwide.</p>
      </div>
      <div class="cards-container">
        <div class="card">
          <div className="img img-1"></div>
          <h3>Team Member 1</h3>
          <p>Lead Developer with expertise in frontend and backend technologies.</p>
        </div>
        <div class="card">
        <div className="img img-2"></div>
          <h3>Team Member 2</h3>
          <p>Creative designer responsible for crafting stunning user interfaces.</p>
        </div>
        <div class="card">
          <div className="img img-3"></div>
          <h3>Team Member 3</h3>
          <p>Project manager ensuring timely delivery and team collaboration.</p>
        </div>
      </div>
    </div>
  )
}

export default About
