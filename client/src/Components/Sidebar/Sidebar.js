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

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  
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
        </Drawer>
      </div>
    );
  }
}