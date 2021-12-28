import React from 'react';
import Data from '../data.json';
import '../assets/styles/components/Projects.scss';
import uniqway from '../assets/img/projects/uniqway.png'
import workinproggress from '../assets/img/projects/wip.png'

function Projects() {
    const tabs = [];
    const texts = [];
    const images = [];

    for (const [index, value] of Data.projects.items.entries()){
      tabs.push(<li key={index} id={value.projectName}>{value.projectName}</li>);
      texts.push(<p key={index} id={value.projectName + "-text"}>{value.text}</p>);
    }
    
    images.push(<img className="projects-img" id="uniqway-img" src={uniqway} alt="uniqway"/>);
    images.push(<img className="projects-img" id="wip-img" src={workinproggress} alt="wip"/>);

    return (
      <section id="projects" className="centered-heading">
        <h3 id="projects-heading">Projects</h3>
        <div className="projects-window">
          <div className="projects-texts-wrapper">
            <ul className="tabs">
              {tabs}
            </ul>
            {texts}
          </div>

          <div className="projects-images">
            {images}
          </div>  
        </div>
        
      </section>
    );
  }
  
  export default Projects;