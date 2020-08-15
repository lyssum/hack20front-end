import React from "react";
import classes from "./Cards.module.css";
import Welcome from "./Welcome/Welcome";
import UserStats from "./UserStats/UserStats";

const cards = (props) => {
  return (
    <div className={classes.Cards}>
      <Welcome name="Kevin"/>
      <UserStats
        age="20"
        height="5'11"
        weight="160 lbs"
      />
    </div>
  );
};

export default cards;