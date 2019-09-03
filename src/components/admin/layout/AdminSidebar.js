import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
          {this.props.hasImage ? (
            <div className="sidebar-background" />
          ) : (
            null
          )}
        <div className="logo center">
            <h4>DASHBOARD</h4>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <a href="#customer" className="list-group-item"><h5><i className="fa fa-users fa-fw fa-fw" aria-hidden="true"></i>  CUSTOMERS</h5></a>  
            <a href="#hire" className="list-group-item"><h5><i className="fa fa-file fa-fw"></i>  IMPORTS</h5></a>
            <a href="#hire" className="list-group-item"><h5><i className="fa fa-file fa-fw"></i>  EXPORTS</h5></a>
            <a href="#drivers" className="list-group-item"><h5><i className="fa fa-address-card fa-fw"></i>  DRIVERS</h5></a>
            <a href="#drivers" className="list-group-item"><h5><i className="fa fa-truck fa-fw"></i>  VEHICLES</h5></a>
          </ul>
          <br/><br/><br/>
          <ul>
          <a href="#drivers" className="list-group-item"><h5><i className="fa fa-clock fa-fw"></i>  Hire Requests</h5></a>
          <a href="#drivers" className="list-group-item"><h5><i className="fa fa-clock fa-fw"></i>  Ongoing Hires</h5></a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
