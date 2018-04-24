import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
// import Sidebar from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import FlatButton from 'material-ui/FlatButton';
import Cards from './Components/Cards'

const cardStyle = {
  width: '400px',
  height: '500px'
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Sidebar />
        </header>
        <Cards style={cardStyle}/>
        <Cards style={cardStyle}/>
        <Cards style={cardStyle}/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
