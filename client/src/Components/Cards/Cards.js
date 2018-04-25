import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Cards = (props) => (
  <Card style={{
    width: "440px", 
    height: "460px", 
    float: "left", 
    marginLeft: "8px",
    marginTop: "10px",
    backgroundColor: "#009E9EFF"

  }}>
    <CardHeader
      title={props.title}
      titleStyle={{
        fontSize: '30px',
      }}
      actAsExpander={true}
      showExpandableButton={false}
    />
  </Card>
);

export default Cards;