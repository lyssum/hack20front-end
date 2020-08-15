import React from 'react';
import classes from "./UserStats.module.css";

const userstats = (props) => {
  return(
    <div className={classes.UserStats}>
      <p>{props.age}</p>
      <p>{props.height}</p>
      <p>{props.weight}</p>
  </div>
  );
};

export default userstats;