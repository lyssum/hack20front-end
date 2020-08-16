import React from 'react';
import classes from "./Weekday.module.css";

const weekday = (props) => (
  <button className={classes.Button}>{props.day}</button>
);

export default weekday;