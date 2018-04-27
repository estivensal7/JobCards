import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Jobs from '../../jobTitles.js';
import RaisedButton from 'material-ui/RaisedButton';
import api from "../../utils";

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

const JobSearch = (props) => (
      <div>
        <AutoComplete
          hintText="Job Title"
          searchText={props.title}
          onUpdateInput={props.titleText}
          dataSource={Jobs}
          menuProps={menuProps}
          style={{
            backgroundColor: '#666',
            borderRadius: '5px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginLeft: '10px'

          }}
        />
        <AutoComplete
          hintText="Zip Code"
          dataSource={Jobs}
          menuProps={menuProps}
          searchText={props.location}
          onUpdateInput={props.locationText}
          style={{
            backgroundColor: '#666',
            borderRadius: '5px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginLeft: '10px'
          }}
        />
        <RaisedButton
          label="Submit"
          style={{
            marginLeft: '20px'
          }}
          onClick={props.getAllJobs}
        />
      </div>
)

export default JobSearch;