import React from 'react';
import './assets/styles/App.scss';
import Introduction from './components/Introduction';
import About from './components/About';
import Contacts from './components/Contacts';
import Nav from './components/Nav';
import Projects from './components/Projects.js';
import Technologies from './components/Technologies.js';

function App() {
    const sections = ["about", "technologies", "projects", "contacts"];

    return (
      <main>
        <Nav sections={sections} />
        <Introduction/>
        <About/>
        <Technologies/>
        <Projects/>
        <Contacts/>

      </main>
    );
}

export default App;