import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
import {Button, Nav, Navbar, NavDropdown} from 'react-bootstrap'

const AdminNavbar = () => {
  return (
    <Navbar className="no-padding" expand="lg" bg="dark" variant="dark">
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
  )
}



export default AdminNavbar;
