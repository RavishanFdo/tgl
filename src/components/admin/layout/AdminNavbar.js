import React, { Component } from "react";
import {Button, Nav, Navbar, NavDropdown} from 'react-bootstrap'

const AdminNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{paddingLeft:'900px', position: 'fixed' }}>
      {/* <div className="container"> */}
					{/* <Nav.Link href="/"><h3>Dashboard</h3></Nav.Link> */}
					<Nav className="mr-auto right-align">
						<Nav.Link href="#home">Account</Nav.Link>
						<Nav.Link href="#features">Notifications</Nav.Link>
						<Nav.Link href="#pricing"><Button>Logout</Button></Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
					</Nav>
      {/* </div> */}
		</Navbar>
  )
}



export default AdminNavbar;
