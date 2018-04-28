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
import Login from './Components/Login';


injectTapEventPlugin();

class App extends Component {

  state = {
    title: "",
    location: "",
    indeedJobs: [],
    diceJobs: [],
    stackOverflowJobs: []
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
    api.Scrape.indeedJobs(this.state.title, this.state.location)
    .then(data => { this.setState( { indeedJobs: data.data } ) })

    api.Scrape.diceJobs(this.state.title, this.state.location)
    .then(data => { this.setState( { diceJobs: data.data } ) })

    api.Scrape.stackOverflowJobs(this.state.title, this.state.location)
    .then(data => { this.setState( { stackOverflowJobs: data.data } ) })
  };

  renderSigningUpOrLoggingIn (props) {
    const isLoggingIn = props.isLoggingIn;
    if (isLoggingIn) {
      return <Login />;
    } else {
      return <RegisterForm />;
    }
  };

  render() {
    return (
      <MuiThemeProvider >
      <div className="App">
        <header className="App-header">
          <Sidebar>
            <renderSigningUpOrLoggingIn isLoggingIn={false} />
          </Sidebar>
          <h1 className="App-title">Welcome to React</h1>
          <JobSearch 
            title={this.state.title}
            location={this.state.location} 
            titleText={this.handleTitleInput}
            locationText={this.handleLocationInput} 
            getAllJobs={this.getAllJobs} />
        </header>
        <Cards title="Dice"> 
          {this.state.indeedJobs.map((jobs, i) => {
            return <JobCard key={i} title={jobs.title} company={jobs.company} link={jobs.url}/>
          })}
        </Cards>
        <Cards title="Indeed">
          {this.state.diceJobs.map((jobs, i) => {
            return <JobCard key={i} title={jobs.title} company={jobs.company} link={jobs.link}/>
          })}
        </Cards>
        <Cards title="Stack Overflow">
          {this.state.stackOverflowJobs.map((jobs, i) => {
            return <JobCard key={i} title={jobs.title} company={jobs.company} link={jobs.link}/>
          })}
        </Cards>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
