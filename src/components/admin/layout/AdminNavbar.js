import React from "react";
import {NavLink} from 'react-router-dom'
import {Button, Nav, NavDropdown} from 'react-bootstrap'
import {connect} from 'react-redux'
import {signOut} from '../../../store/actions/authActions'

const AdminNavbar = (props) => {

  return (
    // <Navbar className=""  sticky="top" expand="lg" bg="dark" variant="dark">
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="justify-content-end mr-auto" style={{ width: "100%" }}>
    //           <Nav.Link href="#home"><NavLink to='/admin/addhire'>+Add Hire</NavLink></Nav.Link>
    //           <Nav.Link href="#home">Account</Nav.Link>

    //           <NavDropdown title="Notifications" id="basic-nav-dropdown">
    //             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //           </NavDropdown>

    //           <Nav.Link href="#pricing"><Button>Logout</Button></Nav.Link>

    //         </Nav>
    //       </Navbar.Collapse>
    // </Navbar>

    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom" style={{position: 'fixed'}}>
      <button className="btn btn-primary" id="menu-toggle">Toggle Menu</button>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Nav className="justify-content-end mr-auto" style={{ width: "85%" }}>
                 <Nav.Link><NavLink to='/admin/addhire'>+Add Hire</NavLink></Nav.Link>
                 <Nav.Link>Account</Nav.Link>

                 <NavDropdown title="Notifications" id="basic-nav-dropdown">
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
