import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul className="navbar-nav ml-auto">
            <li className="nav-link"><NavLink to='/'>Home</NavLink></li>
             <li className="nav-link"><NavLink to='/'>About</NavLink></li>
             <li className="nav-link"><NavLink to='/'>Services</NavLink></li>
             <li className="nav-link"><NavLink to='/'>Contact</NavLink></li>
             {/* <li className="nav-link text-nowrap bell">
                <a className="nav-link "  href="#"><i className="fa fa-bell fa-fw"></i></a>
             </li> */}
             <li className="nav-link"><NavLink to='/'>Profile</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;