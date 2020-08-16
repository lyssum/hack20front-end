import React from 'react';
import Weekday from "./Weekday/Weekday";

const days = ["mon", "tues", "wed", "thur", "sat", "sat"];

const weekdays = (props) => {
  return (
    days.map(day => (
      <Weekday
        key={day}
        day={day}
      />
    ))
  )
};

export default weekdays;