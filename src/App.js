import React from 'react';
import About from './About';
import HomePage from './HomePage';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
