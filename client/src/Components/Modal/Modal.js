import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import "./Modal.css"
import api from "../../utils";

export default class DialogExampleSimple extends React.Component {

	constructor(props) {
    super(props);

    this.state = {
    	job_id: props.job_id,
    	newNote: "",
      open: false,
      notes: []
    };
  }

  handleOpen = () => {
    this.setState({open: true});
    this.getNotes();
  };

  handleClose = () => {
    this.setState({open: false});
  };

  getNotes = () => {
    this.setState({ notes: [] });
  	const job_id = this.state.job_id;
  	api.Database.getNotes(localStorage.getItem("user_id"), job_id)
  	.then(data => { this.setState( { notes: data.data } ); })
  };

  addNewNote = () => {
  	const data = {
  		message: this.state.newNote,
  		userId: localStorage.getItem("user_id"),
  		jobId: this.state.job_id
  	};

  	api.Database.addNewNote(data)
  	.then(data => this.getNotes())
  };

  deleteNote = e => {
    api.Database.deleteNote(e.target.id)
    .then(data => this.getNotes())
  };

  handleInputChange = (input) => {
  	const text = input.target.value;
  	this.setState({ newNote: text })
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
        onClick={this.addNewNote}
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
          autoScrollBodyContent={true}
          onRequestClose={this.handleClose}
        >
          {this.state.notes.map((note, i) => {
          	return <Paper 
          		key={i}
          		style={{
          			height:"100px",
          			margin: "5px",
          			overflow: "auto",
                padding: "20px"
          		}}
          		zDepth={2}
          	>
          		{note.message}
          		<a className="delete-button"
                id={note.notes_id}
                onClick={e => this.deleteNote(e)}>X</a>
          	</Paper>
          })}
          <textarea 
          	className="new-note--text"
          	value={this.state.newNote}
          	onChange={this.handleInputChange}>
          	</textarea>
        </Dialog>
      </div>
    );
  }
}