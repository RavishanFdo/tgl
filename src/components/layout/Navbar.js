import React from 'react'
// import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import AdminNavbar from '../admin/layout/AdminNavbar'
import AdminSidebar from '../admin/layout/AdminSidebar'
import {connect} from 'react-redux'


const Navbar = (props) => {

    const {auth, type} = props

    const links = auth.uid && type.userType === 'customer' ? <SignedInLinks/> :  (auth.uid && type.userType === 'admin' ? <><AdminNavbar/> </> : <SignedOutLinks/> );
{/* <AdminSidebar/> */}
    return(
        <div>
            {links}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        type: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);