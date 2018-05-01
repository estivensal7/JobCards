import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import api from "../../utils";

export default class Login extends React.Component {
  
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

  onSubmit = e => {
    e.preventDefault();
    
    if (this.state.username && this.state.password) {
      api.Database.logIn(this.state.username, this.state.password)
      .then(data => {
        if (data.data) {
          localStorage.setItem("username", JSON.stringify(data.data.username));
          localStorage.setItem("user_id", JSON.stringify(data.data.user_id));
          this.setState({ errorText: "" });
          this.state.handleClose(); 
          this.state.handleToggle();
          this.state.handleSavedJobs();
        }
        else {
          this.setState({ errorText: "Wrong Username or password" });
        }
      })
    }
    else {
      this.setState({ errorText: "Please fill out the sign in form" });
    }

    this.setState({
      username: "",
      password: ""
    });
    
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
          label="Login" 
          onClick={e => this.onSubmit(e)} 
          style={{
            marginLeft: '260px',
            marginTop: '20px',
            boxShadow: '0px 0px 20px 1px #111'
          }}
          backgroundColor={'#bbb'}
        />
        
      </form>
    );
  }
}

