import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="background-paper height-100vh-calc2p5em overflow-y-scroll width-100pc">
        <main className="display-flex align-items-stretch flex-direction-row height-100pc width-100pc">
          <div className="padding-bottom-p75em padding-left-p75em padding-right-p75em padding-top-p75em width-50pc">
            <div className="border-solid-1px-18-49-67 height-100pc padding-bottom-p5em padding-left-p5em padding-right-p5em width-100pc">
              <div className="text-center">
                  <div className="bg-color-255-239-183-p35 border-bottom-p75em-double-10-33-47 border-radius-4px display-inline-block padding-bottom-p75em padding-left-p75em padding-right-p75em padding-top-p75em">
                    <h1>
                      <span>Arroz con Gandules</span>
                      <span className="display-block font-catamaran font-size-p5em font-weight-500">A recipe for food access<br/>in Lawrence, MA</span>
                    </h1>
                  </div>
              </div>
              <p>Body of Text</p>
            </div>
          </div>
          <div className="padding-bottom-p75em padding-left-p75em padding-right-p75em padding-top-p75em width-50pc">
            <div className="border-solid-1px-18-49-67 height-100pc padding-bottom-p5em padding-left-p5em padding-right-p5em padding-top-p5em width-100pc">
              <p>Body of Text</p>
            </div>
          </div>
        </main>
        <footer class="bg-color-222-239-247 border-top-p75em-double-10-33-47 bottom-0 color-10-33-47 font-catamaran height-2p5em position-fixed width-100pc">
          Hai
        </footer>
      </div>
    );
  }
}

export default App;
