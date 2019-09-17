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
    return (
      // <div
      //   id="sidebar"
      //   className="sidebar"
      //   data-color={this.props.color}
      //   data-image={this.props.image}
      // >
      //     {this.props.hasImage ? (
      //       <div className="sidebar-background" />
      //     ) : (
      //       null
      //     )}
      //   <div className="logo center">
      //       <h4><NavLink to='/admin'>DASHBOARD</NavLink></h4>
      //   </div>
      //   <div className="sidebar-wrapper">
      //     <ul className="nav">
      //       <a href="#customer" className="list-group-item"><h5><i className="fa fa-users fa-fw fa-fw" aria-hidden="true"></i>  <NavLink to='/admin/customers'>Customers</NavLink></h5></a>  
      //       <a href="#hire" className="list-group-item"><h5><i className="fa fa-file fa-fw"></i>  <NavLink to='/admin/hires'>Hires</NavLink></h5></a>
      //       <a href="#drivers" className="list-group-item"><h5><i className="fa fa-address-card fa-fw"></i>  <NavLink to='/admin/drivers'>Drivers</NavLink></h5></a>
      //       <a href="#drivers" className="list-group-item"><h5><i className="fa fa-truck fa-fw"></i>  <NavLink to='/admin/vehicles'>Vehicles</NavLink></h5></a>
      //     </ul>
      //     <br/><br/><br/>
      //     <ul className="nav">
      //     <a href="#drivers" className="list-group-item"><h5><i className="fa fa-clock fa-fw"></i>  <NavLink to='/admin'>Hire Requests</NavLink></h5></a>
      //     <a href="#drivers" className="list-group-item"><h5><i className="fa fa-clock fa-fw"></i>  <NavLink to='/admin'>Ongoing Hires</NavLink></h5></a>
      //     <a href="#drivers" className="list-group-item"><h5><i className="fa fa-clock fa-fw"></i>  <NavLink to='/admin/addhire'>Add Hire</NavLink></h5></a>
      //     </ul>
      //   </div>
      // </div>

      <div className="bg-dark border-right" id="sidebar-wrapper">
      <div className="sticky-top">
        <div className="sidebar-heading center" style={{paddingTop: "30px"}}><NavLink to='/admin'>DASHBOARD</NavLink></div>
        <div className="list-group list-group-flush">
          <ul>
            <li className="list-group-item list-group-item-action bg-light"><NavLink to='/admin/customers'>Customers</NavLink></li>
            <li className="list-group-item list-group-item-action bg-light"><NavLink to='/admin/hires'>Hires</NavLink></li>
            <li className="list-group-item list-group-item-action bg-light"><NavLink to='/admin/drivers'>Drivers</NavLink></li>
            <li className="list-group-item list-group-item-action bg-light"><NavLink to='/admin/vehicles'>Vehicles</NavLink></li>
          </ul>
        </div><br/><br/>
        <div className="list-group list-group-flush">
          <ul>
            <li className="list-group-item list-group-item-action bg-light"><NavLink to='/admin'>Hire Requests</NavLink></li>
            <li className="list-group-item list-group-item-action bg-light"><NavLink to='/admin'>Ongoing Hires</NavLink></li>
            <li className="list-group-item list-group-item-action bg-light"><NavLink to='/admin/addhire'>Add Hire</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
    );
  }
}

export default Sidebar;
