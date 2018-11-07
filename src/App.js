import React, { Component } from 'react';
import './App.css';
import Plate from './assets/images/plate.png';

const backgroundPlate = {
    border: "1px solid #000",
    backgroundImage: `url(${Plate})`,
    width: "100%",
    height: "auto"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={ backgroundPlate }>abc</div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
