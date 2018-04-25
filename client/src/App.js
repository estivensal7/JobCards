import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Cards from './Components/Cards';
import JobSearch from './Components/Title';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
      <div className="App">
        <header className="App-header">
          <Sidebar />
          <h1 className="App-title">Welcome to React</h1>
          <JobSearch />
        </header>
        <Cards title="Dice"/>
        <Cards title="Indeed"/>
        <Cards title="Stack Overflow"/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
