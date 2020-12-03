import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';
import './App.css';
import Footer from './components/Footer/Footer';

class App extends React.Component {

  state = {
    work: [
      {
        id: 1, 
        image: '/assets/images/booklub-2.gif', 
        title: 'booklub', 
        description: 'an online book club that sorts users into groups based on their literary interests and goals', 
        year: 2020,
        link: '</>'
      },
      {
        id: 1, 
        image: '/assets/images/brainflix.gif', 
        title: 'brainflix', 
        description: 'a prototype for a new interactive video streaming platform that gets live data from a server', 
        year: 2020,
        link: '</>'
      },
      {
        id: 1, 
        image: '/assets/images/adidas.gif', 
        title: 'adidas 2.0', 
        description: "a mobile-first app that highlights and celebrates adidas's sustainable practices and products", 
        year: 2020,
        link: '</>'
      },
      {
        id: 1, 
        image: '/assets/images/bandsite.gif', 
        title: 'bandsite', 
        description: 'website for an up-and-coming band with front end and back end functionality', 
        year: 2020,
        link: '</>'
      },
      {
        id: 1, 
        image: '/assets/images/instock.gif', 
        title: 'instock', 
        description: 'an inventory management system for a fortune 500 client', 
        year: 2020,
        link: '</>'
      }
    ]
  }

  render() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/work"><Work work={this.state.work}/></Route>
        <Route path="/about" component={About}></Route>
       <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </div>
  );
}
}

export default App;
