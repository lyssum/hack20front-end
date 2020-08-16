import React from 'react';
import classes from "./WorkoutCompletion.module.css";

const workoutcompletion = (props) => {
  let text;
  if (props.text === "complete") {
    text = "Workouts completed";
  } else {
    text = "Workout in progress";
  }
  return (
  <div className={classes.WorkoutCompletion}>
    <p className={classes.Num}>{props.num}</p>
    <p>{text}</p>
  </div>
  );
};

export default workoutcompletion;