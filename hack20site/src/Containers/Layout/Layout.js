import React, {Component} from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import classes from "./Layout.module.css";

class Layout extends Component {
  render() {
    return(
      <div className={classes.Layout}>
        <Sidebar></Sidebar>
        {this.props.children}
      </div>
    )
  }
}
export default Layout;