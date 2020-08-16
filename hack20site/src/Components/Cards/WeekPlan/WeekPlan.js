import React from 'react';
import Weekdays from "./Weekdays/Weekdays";
import classes from "./WeekPlan.module.css";

const weekplan = (props) => {
  return(
    <div className={classes.WeekPlan}>
        <h1>This Week's Plan</h1>
        <Weekdays/>
    </div>
  );
};

export default weekplan;