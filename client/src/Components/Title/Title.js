import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Jobs from '../../jobTitles.js';
import RaisedButton from 'material-ui/RaisedButton';
import './Title.css';

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

const JobSearch = (props) => (
      <div className='title-container'>
        <AutoComplete
          hintText="Job Title"
          searchText={props.title}
          onUpdateInput={props.titleText}
          dataSource={Jobs}
          menuProps={menuProps}
          style={{
            backgroundColor: '#555',
            borderRadius: '5px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginLeft: '10px',
            boxShadow: '0px 0px 20px 1px #111 inset'
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
            backgroundColor: '#555',
            borderRadius: '5px',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginLeft: '10px',
            boxShadow: '0px 0px 20px 1px #111 inset'
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
            borderRadius: '10px',
          }}
          onClick={props.getAllJobs}
          labelColor='#fff'
          backgroundColor='#444'
        />
      </div>
)

export default JobSearch;