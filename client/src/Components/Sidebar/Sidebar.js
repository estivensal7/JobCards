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


export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  state = {
    fields: {}
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

  // signInForm (props) {
  //   return <Login />
  // };

  // signUpForm (props) {
  //   return <RegisterForm />
  // };

  // renderSigningUpOrLoggingIn (props) {
  //   const isLoggingIn = props.isLoggingIn;
  //   if (isLoggingIn) {
  //     return <Login />;
  //   } 

  //   if (!isLoggingIn) {
  //     return <RegisterForm />;
  //   }
  // };
  
  render() {
    return (
        <div>
          <RaisedButton
            label="Profile"
            onClick={this.handleToggle}
            style={{
              float: 'right'
            }}
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
            <RaisedButton 
              label="Sign Up" 
              buttonStyle = {{
              backgroundColor: "#565656FF"    
              }}
              primary
            />
            <RaisedButton 
              label="Login" 
              buttonStyle = {{
                marginLeft: "5px",
                marginTop: "20px"
              }}
              primary 
            />
            {/*<RegisterForm onChange={fields => this.onChange(fields)}/> 
                        <Login onChange={fields => this.onChange(fields)}/>  
                        <p>
                          {JSON.stringify(this.state.fields, null, 2)}
                        </p>*/}
            {/*<renderSigningUpOrLoggingIn isLoggingIn={true} />*/}
          </Drawer>
        </div>
    );
  }
}