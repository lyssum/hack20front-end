import React from 'react';
import classes from "../Button/Button.module.css";

const button = (props) => (
  <div className={classes.Button}>{props.text}</div>
);

export default button;