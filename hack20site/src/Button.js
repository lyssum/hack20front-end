
import React, {Component} from 'react';

export default class Button extends Component {
  render() {
    return(
      <div className="Button">
          <p>{this.props.text}</p>
      </div>
    );
  }
}