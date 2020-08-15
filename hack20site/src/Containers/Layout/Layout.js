import React, {Component} from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";

class Layout extends Component {
  render() {
    return(
      <div>
        <Sidebar></Sidebar>
        <p>Search!</p>
        {this.props.children}
      </div>
    )
  }
}
export default Layout;