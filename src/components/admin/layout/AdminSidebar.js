import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaUsers, FaBuffer, FaTruck, FaUserCog, FaClock, FaPlusSquare, FaPlay, FaUserSlash} from "react-icons/fa";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  // activeRoute(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  // }
  // updateDimensions() {
  //   this.setState({ width: window.innerWidth });
  // }
  // componentDidMount() {
  //   this.updateDimensions();
  //   window.addEventListener("resize", this.updateDimensions.bind(this));
  // }
  render() {
    return (
      <div className="bg-dark border-right" id="sidebar-wrapper">
      <div className="sticky-top">
        <div className="sidebar-heading center" style={{paddingTop: "30px"}}><NavLink to='/admin' className="text-decoration-none">DASHBOARD</NavLink></div>
        <div className="list-group list-group-flush">
          <ul className="align-self-center">
            <NavLink to='/admin/customers' className="text-decoration-none"><li className="list-group-item list-group-item-action " ><FaUsers/> Customers</li></NavLink>
            <NavLink to='/admin/hires' className="text-decoration-none"><li className="list-group-item list-group-item-action "><FaBuffer/> Hires</li></NavLink>
            <NavLink to='/admin/drivers' className="text-decoration-none"><li className="list-group-item list-group-item-action "><FaUserCog/> Drivers</li></NavLink>
            <NavLink to='/admin/vehicles' className="text-decoration-none"><li className="list-group-item list-group-item-action "><FaTruck/> Vehicles</li></NavLink>
          </ul>
        </div>
        <div className="list-group list-group-flush" style={{paddingTop: "50px"}}>
          <ul className="align-self-center">
            <NavLink to='/admin/hirerequests' className="text-decoration-none"><li className="list-group-item list-group-item-action "><FaClock/> Hire Requests</li></NavLink>
            <NavLink to='/admin/ongoinghires' className="text-decoration-none"><li className="list-group-item list-group-item-action "><FaPlay/> Ongoing Hires</li></NavLink>
            <NavLink to='/admin/addhire' className="text-decoration-none"><li className="list-group-item list-group-item-action "><FaPlusSquare/> Add Hire</li></NavLink>
          </ul>
        </div>
        <div className="list-group list-group-flush" style={{paddingTop: "50px"}}>
          <ul className="align-self-center">
            <NavLink to='/admin/disabled' className="text-decoration-none"><li className="list-group-item list-group-item-action "><FaUserSlash/> Disabled</li></NavLink>
          </ul>
        </div>
      </div>
    </div>
    );
  }
}

export default Sidebar;
