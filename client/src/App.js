import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FoodAccessOverview from "./pages/FoodAccessOverview";
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
            <Route exact path="/foodAccessOverview"  component={FoodAccessOverview} />
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
