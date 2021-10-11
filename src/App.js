import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './pages/Home';
import Inspiration from './pages/Inspiration';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Switch>
        <Route path = '/' exact component={Home}/>
        <Route path = '/inspo' component={Inspiration}/>
      </Switch>
    </Router>
  );
}

export default App;
