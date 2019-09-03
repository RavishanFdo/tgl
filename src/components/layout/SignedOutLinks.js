import React from 'react'
import {NavLink} from 'react-router-dom'

const stl = {
    textDecoration: 'none'
}

const SignedOutLinks = () => {
    return(
        <ul className="navbar-nav ml-auto">
            <li className="nav-link" style={stl}><NavLink to='/'>Home</NavLink></li>
            <li className="nav-link"><NavLink to='/about'>About</NavLink></li>
            <li className="nav-link"><NavLink to='/services'>Services</NavLink></li>
            <li className="nav-link"><NavLink to='/contact'>Contact</NavLink></li>
            <li className="nav-link"><NavLink to='/signin'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;