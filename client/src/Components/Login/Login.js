import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      username: "",
      password: ""
    });
    this.props.onChange({
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
        />
        <br />
        
        <RaisedButton 
        	label="Login" 
        	onClick={e => this.onSubmit(e)} 
        	buttonStyle = {{
        		marginLeft: "5px",
        		marginTop: "20px"
        	}}
        	primary 
        />
      </form>
    );
  }
}

