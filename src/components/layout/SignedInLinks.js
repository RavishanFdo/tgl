import React from 'react'
import {NavLink} from 'react-router-dom'
import {Button, Nav, Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return(
        <Navbar bg="dark" variant="dark" style={{ minWidth: 700, position: 'fixed' }}>
            <div className="container">
                <NavLink to='/'style={{ minWidth: 300, textDecoration:'none'}} ><h3>Trans Global Logistics</h3></NavLink>
                <Nav className="mr-auto right-align">
                    <Nav.Link><NavLink to='/' style={{textDecoration: 'none'}}>Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/about' style={{textDecoration: 'none'}}>About</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/services' style={{textDecoration: 'none'}}>Services</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/contact' style={{textDecoration: 'none'}}>Contact</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/' style={{textDecoration: 'none'}}>Profile</NavLink></Nav.Link>
                    <Nav.Link><Button onClick={props.signOut} style={{textDecoration: 'none'}}>Logout</Button></Nav.Link>
                </Nav>
            </div>
        </Navbar>       
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);