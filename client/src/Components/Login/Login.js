import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import api from "../../utils";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    
    api.Database.logIn(this.state.username, this.state.password)
    .then(data => {
      console.log(data);
      localStorage.setItem("username", JSON.stringify(data.data.username));
      localStorage.setItem("user_id", JSON.stringify(data.data.user_id));
    })

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
          floatingLabelFixed
          style={{marginLeft: '175px'}}
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
          style={{marginLeft: '175px'}}
        />
        <br />
        
        <RaisedButton 
          label="Login" 
          onClick={e => this.onSubmit(e)} 
          primary style={{marginLeft: '260px'}}/>
        
      </form>
    );
  }
}

