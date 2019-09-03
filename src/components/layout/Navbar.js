import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <div className="container">
                 <Link to='/' className='brand-logo'>Trans Global Logistics</Link>
                 {/* <SignedInLinks></SignedInLinks> */}
                 <SignedOutLinks></SignedOutLinks>
            </div>
        </nav>
    )
}

export default Navbar;