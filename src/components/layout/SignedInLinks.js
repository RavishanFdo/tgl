import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import {Button, Nav, Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {

    return(
        <Navbar bg="dark" variant="dark" style={{ minWidth: 700, position: 'fixed' }}>
            <div className="container" >
                <NavLink to='/'style={{ minWidth: 300 }} ><h3>Trans Global Logistics</h3></NavLink>
                <Nav className="mr-auto right-align">
                    <Nav.Link><NavLink to='/cust/Home'>Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/about'>About</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/services'>Services</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/contact'>Contact</NavLink></Nav.Link>
                    <Nav.Link><NavLink to={'/cust/profile' } ><i class="fas fa-user-circle"></i></NavLink></Nav.Link>
                    <Nav.Link><Button onClick={props.signOut}>Logout</Button></Nav.Link>
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