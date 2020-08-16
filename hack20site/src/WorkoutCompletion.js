import React, {Component} from 'react';

export default class WorkoutCompletion extends Component {
  render() {
      let text;
      if (this.props.text === "complete") {
        text = "Workouts completed";
      } else {
        text = "Workout in progress";
      }

      return (
          <div className="WorkoutCompletion">
            <p className="Num">{this.props.num}</p>
            <p>{text}</p>
          </div>
        );
  }
}