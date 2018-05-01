import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import api from "../../utils";

export default class Form extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      username: "",
      password: "",
      errorText: "",
      handleClose: props.handleClose,
      handleToggle: props.handleToggle,
      handleSavedJobs: props.handleSavedJobs
    };
  }


  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  onSubmit = () => {    
    if (this.state.username && this.state.password) {
      api.Database.newUser(this.state.username, this.state.password)
      .then(data => {
        if (data.data) {
          api.Database.logIn(data.data.username, data.data.password)
          .then(registered => {
            localStorage.setItem("username", JSON.stringify(registered.data.username));
            localStorage.setItem("user_id", JSON.stringify(registered.data.user_id));
            this.setState({ errorText: "" });
            this.state.handleClose();
            this.state.handleToggle();
            this.state.handleSavedJobs();
          })
        }
        else {
          this.setState({ errorText: "This username is already taken" });
        }
      })
    }
    else {
      this.setState({ errorText: "Please fill out the registration form" });
    }
  };

  render() {
    return (
      <form>
        <TextField
          name="username"
          hintText="Username"
          floatingLabelText="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
          errorText={this.state.errorText}
          floatingLabelFixed
          style={{
            marginLeft: '175px',
            backgroundColor: '#ddd',
            borderRadius: '5px',
            paddingLeft: '10px',
            paddingRight: '25px',
            marginTop: '20px',
            boxShadow: '0px 0px 20px 1px #111'
          }}
        />
        <br />
        <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
          type="password"
          floatingLabelFixed
          style={{
            marginLeft: '175px',
            backgroundColor: '#ddd',
            borderRadius: '5px',
            paddingLeft: '10px',
            paddingRight: '25px',
            marginTop: '20px',
            boxShadow: '0px 0px 20px 1px #111'
        }}
        />
        <br />
        <RaisedButton 
          label="Create Account" 
          onClick={e => this.onSubmit(e)} 
          style={{
            marginLeft: '223px',
            marginTop: '20px',
            boxShadow: '0px 0px 20px 1px #111'
          }}
          backgroundColor={'#bbb'}
        />
      </form>
    );
  }
}