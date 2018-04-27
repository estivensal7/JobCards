import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
const JobCard = (props) => (
  <Card style={{
    width: "420px", 
    height: "60px", 
    float: "left", 
    marginLeft: "8px",
    // marginTop: "10px",
    backgroundColor: "#fff"
  }}>
    <CardHeader
      title={props.title}
      titleStyle={{
        fontSize: '20px',
      }}
      subtitle={props.company}
      actAsExpander={false}
      showExpandableButton={false}
    >
      <CardActions>
        <FlatButton label="Link" href={props.link} />
        <FlatButton label="Save Post" />
      </CardActions>
    </CardHeader>
  </Card>
);
export default JobCard;