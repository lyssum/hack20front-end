import React, {Component} from 'react';
import Welcome from "./Welcome";
import WorkoutCompletion from "./WorkoutCompletion";
import WeekPlan from "./WeekPlan";
import Button from "./Button";


export default class MainContent extends Component {
    render() {
        return (
            <div className="Cards">
              <div>
                <Welcome name={this.props.name}/>
                <WorkoutCompletion text="complete" num="5"/>
                <WorkoutCompletion num="1"/>
              </div>

              <div className="Button">
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
