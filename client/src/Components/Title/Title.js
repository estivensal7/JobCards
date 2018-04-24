import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Jobs from '../../jobTitles.js';

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
          hintText="Type anything"
          dataSource={Jobs}
          menuProps={menuProps}
        />
      </div>
    );
  }
}
