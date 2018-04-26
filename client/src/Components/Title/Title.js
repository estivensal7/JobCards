import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Jobs from '../../jobTitles.js';
import RaisedButton from 'material-ui/RaisedButton';

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

/**
 * Provide props to be passed into the Menu component.
 */
export default class JobSearch extends Component {
  render() {
    return (
      <div>
        <AutoComplete
          hintText="Job Title"
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
        />
      </div>
    );
  }
}
