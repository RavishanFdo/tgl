import React from "react";
import {NavLink} from 'react-router-dom'
import {Button, Nav, NavDropdown} from 'react-bootstrap'
import {connect} from 'react-redux'
import {signOut} from '../../../store/actions/authActions'
import {FaBell, FaUserCircle, FaBars} from 'react-icons/fa'

const AdminNavbar = (props) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom" style={{position: 'fixed'}}>
      <button className="btn btn-primary" id="menu-toggle"><FaBars/></button>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Nav className="justify-content-end mr-auto" style={{ width: "85%" }}>
          <Nav.Link><NavLink to='/admin/addhire' className="text-decoration-none">+Add Hire</NavLink></Nav.Link>
          <Nav.Link><FaUserCircle size={28}/></Nav.Link>

          <NavDropdown title={<FaBell size={28}/>} id="basic-nav-dropdown">
            <NavDropdown.Item >Action</NavDropdown.Item>
            <NavDropdown.Item >Another action</NavDropdown.Item>
            <NavDropdown.Item >Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item >Separated link</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link><Button onClick={props.signOut}>Logout</Button></Nav.Link>

          </Nav>
      </div>
  </nav>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
      signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(AdminNavbar);
