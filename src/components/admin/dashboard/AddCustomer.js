import React, {Component} from 'react'
// import {NavLink} from 'react-router-dom'
// import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {addCustomer} from '../../../store/actions/adminActions'

class AddCustomer extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        mobile: '',
        dob: ''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addCustomer(this.state)
    }

    render() {
        const {authError} = this.props
        return (
                <div className="container">
                    <br/>
                    <h2 className="center">Add Customer</h2><br/><br/>
                    <div className="red-text center">
                        {authError ? <h6>{authError}</h6> : null}
                    </div>
                    <form onSubmit={this.handleSubmit} >
                        <div className="row">
                            <div className="input-field col-6">
                                <input placeholder="First Name" type="text" id="firstName" onChange={this.handleChange} required />
                            </div>
                            <div className="input-field col-6">
                                <input placeholder="Last Name" type="text" id="lastName" onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col-6">
                                <input placeholder="Mobile" type="text" id="mobile" onChange={this.handleChange} required />
                            </div>
                            <div className="input-field col-6">
                                <input placeholder="Date of Birth" type="date" id="dob" onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div className="input-field row col-6">
                            <input placeholder="Email" type="email" id="email" onChange={this.handleChange} required />
                        </div>
                        <div className="row">
                            <div className="input-field col-6">
                                <input placeholder="Password" type="password" id="password" onChange={this.handleChange} required />
                            </div>
                        </div>
                        <input type="hidden" id="userType" value="customer"/>
                        <div className="input-field center">
                            <button className="btn blue lighten-1 z-depth-0">Register</button>
                            <button className="btn red lighten-1 z-depth-0">Cancel</button>
                        </div>
                    </form>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addCustomer: (newCustomer) => dispatch(addCustomer(newCustomer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer);