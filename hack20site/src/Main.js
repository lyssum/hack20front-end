import React, {Component} from 'react';
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import SignUpForm from "./SignUpForm";


class Main extends Component {
    constructor(props) {
        super(props);

        // User information
        this.state = {
            name: "Kevin"
        }
      }

  render() {
    return(
      <div>
        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <Sidebar/>
                        {this.props.children}
                    </div>

                    <div className="col-7">
                        <MainContent name={this.state.name}/>
                    </div>

                    <div className="col-3">
                        <SignUpForm/>
                    </div>
                </div>
            </div>
        </main>
      </div>
    )
  }
}
export default Main;