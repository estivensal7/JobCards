import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';

const Cards = (props) => (
  <Card style={{
    width: "440px", 
    height: "460px", 
    marginLeft: "8px",
    marginTop: "10px",
    display: "inline-block",
    overflow: "auto"
  }}
  zDepth={2}
  >
    <CardHeader
      title={props.title}
      avatar={props.avatar}
      titleStyle={{
        fontSize: '30px',
      }}
    />
    {props.children}
  </Card>

);

export default Cards;