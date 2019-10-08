import React from 'react'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const ErrorPage = (props) => {

    return(
        <div style={{width: '100%', height: '100vh', textAlign: 'center'}} onLoad={props.signOut}>
            <div style={{paddingTop: '400px'}}>
        		<h1 style={{display: 'inline-block', fontSize: '50px', paddingRight: '12px' }}>Error 404</h1>
                <h6>Your Account is disabled by the System Administrator</h6>
                <h6>Contact System Administrator for support</h6>
                <button className="blue" onClick={props.signOut}>SIGNOUT</button>
    	    </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
  }

export default connect(null, mapDispatchToProps)(ErrorPage);