import React from 'react';
import classes from "./Welcome.module.css";

const welcome = (props) => (
  <section className={classes.Welcome}>
    <p> Hi! {props.name}</p>
  </section>
);

export default welcome;