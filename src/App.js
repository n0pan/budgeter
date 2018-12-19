import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="main-logo">Budgeter</h1>
          <h2 id="slogan">Budgeting, made easy.</h2>
          <button id="try-now">Try now</button>
        </header>
      </div>
    );
  }
}

export default App;
