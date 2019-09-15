import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
import {Button, Nav, Navbar, NavDropdown} from 'react-bootstrap'

const AdminNavbar = () => {
  return (
    <Navbar className=""expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end mr-auto" style={{ width: "100%" }}>
              <Nav.Link href="#home"><NavLink to='/admin/addhire'>+Add Hire</NavLink></Nav.Link>
              <Nav.Link href="#home">Account</Nav.Link>

              <NavDropdown title="Notifications" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#pricing"><Button>Logout</Button></Nav.Link>

            </Nav>
          </Navbar.Collapse>
    </Navbar>
  //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
  //   <button className="btn btn-primary" id="menu-toggle">Toggle Menu</button>

  //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //     <span className="navbar-toggler-icon"></span>
  //   </button>

  //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //     <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
  //       <li className="nav-item active">
  //         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
  //       </li>
  //       <li className="nav-item">
  //         <a className="nav-link" href="#">Link</a>
  //       </li>
  //       <li className="nav-item dropdown">
  //         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //           Dropdown
  //         </a>
  //         <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
  //           <a className="dropdown-item" href="#">Action</a>
  //           <a className="dropdown-item" href="#">Another action</a>
  //           <div className="dropdown-divider"></div>
  //           <a className="dropdown-item" href="#">Something else here</a>
  //         </div>
  //       </li>
  //     </ul>
  //   </div>
  // </nav>
  )
}



export default AdminNavbar;
