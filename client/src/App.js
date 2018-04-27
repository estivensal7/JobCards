import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Cards from './Components/Cards';
import JobSearch from './Components/Title';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RegisterForm from './Components/Register';
import api from "./utils";
import RaisedButton from 'material-ui/RaisedButton';
import JobCard from "./Components/JobCard";

injectTapEventPlugin();

class App extends Component {

  state = {
    title: "",
    location: "",
    jobs: []
  };

  handleTitleInput = (input) => {
    this.setState({
      title: input
    });
  };

  handleLocationInput = (input) => {
    this.setState({ location: input })
  }

  getAllJobs = () => {
    api.Scrape.stackOverflowJobs(this.state.title, this.state.location)
    .then(data => { this.setState( { jobs: data.data } ) })
  };

  render() {
    return (
      <MuiThemeProvider >
      <div className="App">
        <header className="App-header">
          <Sidebar />
          <h1 className="App-title">Welcome to React</h1>
          <JobSearch 
            title={this.state.title}
            location={this.state.location} 
            titleText={this.handleTitleInput}
            locationText={this.handleLocationInput} 
            getAllJobs={this.getAllJobs} />
        </header>
        <Cards title="Dice"> 
          {this.state.jobs.map(jobs => {
            return <JobCard title={jobs.title} company={jobs.company} link={jobs.link}/>
          })}
        </Cards>
        <Cards title="Indeed"/>
        <Cards title="Stack Overflow"/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
