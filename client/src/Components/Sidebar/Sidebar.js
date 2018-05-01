import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';
import Login from '../Login';
import RegisterForm from '../Register';
import {Tabs, Tab} from 'material-ui/Tabs';
import './Sidebar.css';
import JobCard from "../JobCard";
import api from "../../utils";

export default class Sidebar extends React.Component {

  state = {
    open: false,
    value: 'Login',
    jobs: []
  };

  componentDidMount() {
    if (localStorage.getItem("user_id")) {
      this.getSavedJobs();
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleChange = value => { this.setState({ value }) };
 
  getSavedJobs = () => {
    api.Database.getSavedJobs(localStorage.getItem("user_id"))
    .then(data => {
      if (data.data) {
        console.log(data.data);
        this.setState({ jobs: data.data })
      }
    })
  };

  logOut = () => {
    localStorage.clear();
  };

  removeSavedJob = id => {
    api.Database.removeSavedJob(localStorage.getItem("user_id"), id)
    .then(data => {
        api.Database.getSavedJobs(localStorage.getItem("user_id"))
        .then(data => this.setState({ jobs: data.data }))
    })
  }

  renderSigningUpOrLoggingIn() {
    if (this.state.formSelect === "login") {
      return <Login />;
    } 

    else if (this.state.formSelect === "register") {
      return <RegisterForm />;
    }
  };
  
  render() {
        return (
            <div>
              <RaisedButton
                label="Profile"
                onClick={this.handleToggle}
                style={{
                  float: 'right',
                  borderRadius: '5px',
                }}
                backgroundColor='#444'
                labelColor='#fff'
              />
                <Drawer 
                    docked={false}
                    width={600} 
                    openSecondary={true} 
                    open={this.state.open}
                    containerStyle={
                        {backgroundImage: 'url(http://il9.picdn.net/shutterstock/videos/13505777/thumb/1.jpg)'}
                    }
                  >
                    <AppBar 
                      title="Profile" 
                      onLeftIconButtonClick={this.handleClose}
                      iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                      style={{ backgroundColor: '#000'}}

                    >
                        <IconMenu
                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            iconStyle={{
                              color: '#fff'
                            }}
                          >
                            <MenuItem primaryText="Send feedback" />
                            <MenuItem primaryText="Sign out" onClick={()=>{this.logOut(); this.handleClose()}} />
                        </IconMenu>
                    </AppBar>
                    {
                      !localStorage.getItem("user_id") ?              
                        <Tabs
                          value={this.state.value}
                          onChange={this.handleChange}
                          className='tabs-container'
                        >
                          <Tab 
                            label="Log In" 
                            value="Login" 
                            className='tab' 
                            style={{backgroundColor: '#bbb'}}
                          >
                            <div>
                                <Login 
                                  handleClose={this.handleClose}
                                  handleToggle={this.handleToggle}
                                  handleSavedJobs={this.getSavedJobs}
                                />
                            </div>
                          </Tab>
                          <Tab 
                            label="Sign-Up" 
                            value="Register" 
                            className='tab'
                            style={{backgroundColor: '#bbb'}}
                          >
                            <div>
                                <RegisterForm 
                                  handleClose={this.handleClose}
                                  handleToggle={this.handleToggle}
                                  handleSavedJobs={this.getSavedJobs}
                                />
                            </div>
                          </Tab>
                        </Tabs> 
                      :
                        <div>
                          <h1>Hello {localStorage.getItem("username").replace(/"/g, "") }!
                          </h1>
                          <button onClick={this.getSavedJobs} className='get-saved-jobs-button'>
                            Saved Jobs
                          </button>
                          <div>
                            {this.state.jobs.map((job, i) => {
                            return <JobCard 
                              key={i}
                              job_id={job.job_id}
                              title={job.title}
                              company={job.company} 
                              link={job.link}
                              removeSavedJob={() => this.removeSavedJob(job.job_id)}
                              />
                            })}
                          </div>
                        </div>
                    }
                </Drawer>
            </div>
        );
    }
}
