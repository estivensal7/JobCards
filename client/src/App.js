import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Cards from './Components/Cards';
import JobSearch from './Components/Title';
import injectTapEventPlugin from 'react-tap-event-plugin';
import api from "./utils";
import JobCard from "./Components/JobCard";
import indeedLogo from "./img/indeed.png"
import diceLogo from "./img/dice.png";
import stackOverflowLogo from "./img/stackoverflow.png";

injectTapEventPlugin();
const inintializeState = () => {
  return {
    title: "",
    location: "",
    indeedJobs: [],
    diceJobs: [],
    stackOverflowJobs: []
  }
};

class App extends Component {

  state = inintializeState();

  handleTitleInput = (input) => {
    this.setState({
      title: input
    });
  };

  handleLocationInput = (input) => {
    this.setState({ location: input })
  };

  getAllJobs = () => {
    this.setState(inintializeState());
    api.Scrape.indeedJobs(this.state.title, this.state.location)
    .then(data => { 
      this.setState( { indeedJobs: data.data } ) 
    })

    api.Scrape.diceJobs(this.state.title, this.state.location)
    .then(data => { 
      this.setState( { diceJobs: data.data } ) 
    })

    api.Scrape.stackOverflowJobs(this.state.title, this.state.location)
    .then(data => { 
      this.setState( { stackOverflowJobs: data.data } ) 
    })
  };


  saveJob = (title, link, company) => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
      const job = {
        userId, title, link, company
      }
      api.Database.saveJob(job)
      .then(alert("Job saved."))
    } else {
      alert("You need to be logged in to save a job!");
    }
  }


  render() {
    return (
      <MuiThemeProvider >
      <div className="App">
        <header className="App-header">
          <Sidebar>
            <renderSigningUpOrLoggingIn isLoggingIn={false} />
          </Sidebar>
          <h1 className="App-title">JobCards</h1>
          <JobSearch 
            title={this.state.title}
            location={this.state.location} 
            titleText={this.handleTitleInput}
            locationText={this.handleLocationInput} 
            getAllJobs={this.getAllJobs} />
        </header>
        <div className="card-holder">
          <Cards title="Indeed" avatar={indeedLogo}>
            {this.state.indeedJobs.map((jobs, i) => {
              return <JobCard 
                key={i} 
                title={jobs.title} 
                company={jobs.company} 
                link={jobs.url} 
                saveJob={() => this.saveJob(jobs.title, jobs.url, jobs.company)}/>
            })}
          </Cards>
          <Cards title="Dice" avatar={diceLogo} >
            {this.state.diceJobs.map((jobs, i) => {
              return <JobCard 
                key={i} 
                title={jobs.title} 
                company={jobs.company} 
                link={jobs.link}
                saveJob={() => this.saveJob(jobs.title, jobs.link, jobs.company)}/>
            })}
          </Cards>
          <Cards title="Stack Overflow" avatar={stackOverflowLogo}>
            {this.state.stackOverflowJobs.map((jobs, i) => {
              return <JobCard 
                key={i} 
                title={jobs.title} 
                company={jobs.company} 
                link={jobs.link}
                saveJob={() => this.saveJob(jobs.title, jobs.link, jobs.company)}/>
            })}
          </Cards>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
