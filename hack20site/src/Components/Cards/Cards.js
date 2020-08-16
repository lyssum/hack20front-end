import React from "react";
import classes from "./Cards.module.css";

import Welcome from "./Welcome/Welcome";
import WorkoutCompletion from "./WorkoutCompletion/WorkoutCompletion";
import WeekPlan from "./WeekPlan/WeekPlan";
import Button from "../UI/Button/Button";

const cards = (props) => {
  return (
    <div className={classes.Cards}>
      <div className={classes.Row}>
        <Welcome name="Kevin"/>
        <WorkoutCompletion text="complete" num="5"/>
        <WorkoutCompletion num="1"/>
      </div>
      <div className={classes.RowButtons}>
        <Button
          text="Host workout"
        />
        <Button
          text="Find a buddy"
        />
      </div>
      <div className={classes.Row}>
        <WeekPlan/>
      </div>
    </div>
  );
};

export default cards;