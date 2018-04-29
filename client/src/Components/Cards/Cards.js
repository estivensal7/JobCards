import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import './Cards.css';


const Cards = (props) => (
  <Card style={{
    width: "440px", 
    height: "465px", 
    marginLeft: "8px",
    marginTop: "2px",
    display: "inline-block",
    overflow: "auto",
    boxShadow: '0px 0px 20px 2px #222 inset',
    borderRadius: '3px'
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