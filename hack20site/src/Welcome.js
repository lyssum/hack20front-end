import React, {Component} from 'react';

export default class Welcome extends Component {
  render() {
      return (
          <div>
            <section className="Welcome">
              <p>Hi {this.props.name}</p>
            </section>
          </div>
        );
  }
}