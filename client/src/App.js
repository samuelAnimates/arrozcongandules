import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FoodAccessMap from "./pages/FoodAccessMap";
import FoodAccessMap2 from "./pages/FoodAccessMap2";
import HealthyBodegas from "./pages/HealthyBodegas";
import Recipes from "./pages/Recipes";
import Resources from "./pages/Resources";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/"  component={HomePage} />
            <Route exact path="/home"  component={HomePage} />
            <Route exact path="/foodAccessMap"  component={FoodAccessMap} />
            <Route exact path="/foodAccessOpportunities"  component={FoodAccessMap2} />
            <Route exact path="/healthyBodegas"  component={HealthyBodegas} />
            <Route exact path="/resources"  component={Resources} />
            <Route exact path="/recipes"  component={ Recipes} />
            <Route component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
