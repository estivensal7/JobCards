import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import api from "../../utils";

export default class DialogExampleSimple extends React.Component {

	constructor(props) {
    super(props);

    this.state = {
    	job_id: props.job_id,
      open: false,
      notes: []
    };
  }

  handleOpen = () => {
    this.setState({open: true});
    const job_id = this.state.job_id;
  	api.Database.getNotes(localStorage.getItem("user_id"), job_id)
  	.then(data => { this.setState( { notes: data.data } ); })
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <FlatButton label="Notes" onClick={this.handleOpen} />
        <Dialog
          title="Notes"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.state.notes.map(note => {
          	return <p>{note.message}</p>
          })}
        </Dialog>
      </div>
    );
  }
}