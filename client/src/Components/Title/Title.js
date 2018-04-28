import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Jobs from '../../jobTitles.js';
import RaisedButton from 'material-ui/RaisedButton';

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
            marginLeft: '10px',
          }}
          filter={AutoComplete.caseInsensitiveFilter}
          inputStyle={{
            color: '#fff',
            fontSize: '20px'
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
          inputStyle={{
            color: '#fff',
            fontSize: '20px'
          }}
        />
        <RaisedButton
          label="Submit"
          style={{
            marginLeft: '20px',
            borderRadius: '10px'
          }}
          onClick={props.getAllJobs}
          primary
        />
      </div>
)

export default JobSearch;