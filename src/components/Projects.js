import React, { useState } from 'react';
import Data from '../data.json';
import '../assets/styles/components/Projects.scss';
import uniqway from '../assets/img/projects/uniqway.png'
import workinproggress from '../assets/img/projects/wip.png'

function Projects() {
    const tabs = [];
    const texts = [];
    const images = [];
    const [activeTab, setActiveTab] = useState(0);

    function toggleState(e) {
      let ID = e.target.id;
      setActiveTab(parseInt(ID));
    }

    function toggleActive(index, elClassType) {
      if(activeTab === index) {
        return elClassType + " active";
      } else {
        return elClassType;
      }
    }

    for (const [index, value] of Data.projects.items.entries()){
      tabs.push(<li key={index} id={index} onClick={toggleState} className={toggleActive(index, "projects-tabname")}>{value.projectName}</li>);
      texts.push(<p key={index} id={index} className={toggleActive(index, "projects-text")}>{value.text}</p>);
    }
    
    images.push(<img className={toggleActive(0, "projects-img")} id="0" src={uniqway} alt="uniqway"/>);
    images.push(<img className={toggleActive(1, "projects-img")} id="1" src={workinproggress} alt="wip"/>);

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