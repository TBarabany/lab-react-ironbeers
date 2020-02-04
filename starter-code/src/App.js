import React, { Component } from 'react';
import './App.css'
import {Route, Redirect, Switch} from 'react-router-dom'
import Home from './components/Home';
import BeerHeader from './components/BeerHeader';
import Beers from './components/Beers';
import BeerDetail from './components/BeersList/BeerDetail';
import BeerRandom from './components/BeerRandom'
import BeerNew from './components/BeerNew'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BeerHeader/>
        <Switch>
          <Route exact path="/new-beer" component= {BeerNew}/>
          <Route exact path="/random-beer" component= {BeerRandom}/>
          <Route exact path="/beers" component= {Beers}/>
          <Route exact path="/beers/:id" component = {BeerDetail}/>
          <Route exact path="/" component = {Home}/>          
        </Switch>
       
        
      </div>
    )
  }
}

export default App;
