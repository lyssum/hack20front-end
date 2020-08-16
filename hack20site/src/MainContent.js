import React, {Component} from 'react';
import Welcome from "./Welcome";
import WorkoutCompletion from "./WorkoutCompletion";
import WeekPlan from "./WeekPlan";
import Button from "./Button";


export default class MainContent extends Component {
    render() {
        return (
            <div className="row">
              <div className="col-9">
                  <Welcome name={this.props.name}/>
              </div>
              <div className="col-3">
                  <WorkoutCompletion text="complete" num="5"/>
                  <WorkoutCompletion num="1"/>
              </div>
              <div className="row">
                <Button
                  text="Host workout"
                />
                <Button
                  text="Find a buddy"
                />
              </div>

              <div className="Button">
                <WeekPlan/>
              </div>
            </div>
          );
    }
}
