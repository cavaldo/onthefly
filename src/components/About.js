import React from 'react';
import Data from '../data.json';

function About() {
    return (
      <section id="about">
          <div id="about-left-card" className="centered">
            <h3 className="card-heading">About</h3>
          </div>
          <div id="about-right-card">
            <p className="card-paragraph">{Data.about.origin}</p>
            <p className="card-paragraph">{Data.about.currentJob}</p>
            <p className="card-paragraph">{Data.about.motivation}</p> 
          </div>
      </section>
    );
  }
  
  export default About;
  