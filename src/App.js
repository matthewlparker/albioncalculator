import React, { Component } from 'react';

import Calculator from './components/calculator';

import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">{`Ganoe's crafting calculator`}</h1>
          </header>
          <div className="main">
            <Calculator />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
