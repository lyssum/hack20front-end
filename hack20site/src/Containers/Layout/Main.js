import React, {Component} from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import classes from "./Layout.module.css";

class Main extends Component {
  render() {
    return(
      <div className={classes.Layout}>
        <main>
            <div className="row">
                <Sidebar></Sidebar>
                {this.props.children}
            </div>
        </main>
      </div>
    )
  }
}
export default Layout;