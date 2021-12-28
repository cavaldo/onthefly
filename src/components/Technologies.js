import React from 'react';
import Data from '../data.json';
import '../assets/styles/components/Technologies.scss';

function Technologies() {
    const items = [];

    for (const [index, value] of Data.technologies.entries()){
      items.push(<li key={index}>{value}</li>);
    }

    return (
      <section id="technologies">
          <div id="technologies-left-card">
            <p className="card-paragraph">{Data.tech}</p>
            <ul className="card-paragraph">
              {items}
            </ul>
          </div>
          <div id="technologies-right-card" className="centered">
            <h3 className="card-heading">Technologies</h3>
          </div>
      </section>
    );
  }
  
  export default Technologies;
  