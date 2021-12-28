import React from 'react';
import './assets/styles/App.scss';
import Introduction from './components/Introduction';
import About from './components/About';
import Contacts from './components/Contacts';
import Nav from './components/Nav';
import Journey from './components/Journey';
import Projects from './components/Projects.js';
import Technologies from './components/Technologies.js';

class App extends React.Component {

  render () {
    return (
      <main>
        <Nav/>
        <Introduction/>
        <About/>
        <Technologies/>
        <Projects/>
        <Journey/>
        <Contacts/>

      </main>
    );
  }
}

export default App;