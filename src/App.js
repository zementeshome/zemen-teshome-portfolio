import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
       <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
