import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';
import Login from '../Login';
import RegisterForm from '../Register';
import {Tabs, Tab} from 'material-ui/Tabs';
import './Sidebar.css';


export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  state = {
    fields: {},
    formSelect: "login",
    value: 'Login'
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
 

  renderSigningUpOrLoggingIn() {
    if (this.state.formSelect = "login") {
      return <Login />;
    } 

    else if (this.state.formSelect = "register") {
      return <RegisterForm />;
    }
  };

  handleFormChange = formState => {
    this.setState({formSelect: formState})
  }
  
  render() {
    return (
        <div>
          <RaisedButton
            label="Profile"
            onClick={this.handleToggle}
            style={{
              float: 'right',
            }}
            primary
          />
          <Drawer 
            docked={false}
            width={600} 
            openSecondary={true} 
            open={this.state.open}
          >
            <AppBar 
              title="Profile" 
              onLeftIconButtonClick={this.handleClose}
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              style={{ backgroundColor: '#009E9EFF'}}
            >
              <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <MenuItem primaryText="Send feedback" />
                <MenuItem primaryText="Sign out" />
              </IconMenu>

            </AppBar>

            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              className='tabs-container'
            >
              <Tab label="Log In" value="Login" className='tab'>
                <div>
                    <Login />
                </div>
              </Tab>
              <Tab label="Sign-Up" value="Register" className='tab'>
                <div>
                    <RegisterForm />
                </div>
              </Tab>
            </Tabs>
          </Drawer>
        </div>
    );
  }
}
            // {
            //  this.renderSigningUpOrLoggingIn()   
            // }
            
            // <RaisedButton 
            //   label="Sign Up" 
            //   buttonStyle = {{
            //   backgroundColor: "#565656FF"    
            //   }}
            //   onClick={this.handleFormChange}
            // />
            // <RaisedButton 
            //   label="Login" 
            //   buttonStyle = {{
            //     marginLeft: "5px",
            //     marginTop: "20px"
            //   }}
            //   onClick={this.handleFormChange}
            // />