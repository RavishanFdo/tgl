import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        mobile: '',
        username: '',
        dob: ''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="loginBody">
                <div className="container">
                    <br/>
                    <div className="d-flex justify-content-center h-100">
                        <div className="card signup">
                            <div className="card-header">
                                <h3>Sign Up</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit} >
                                    <div className="input-field">
                                        <input placeholder="First Name" type="text" id="firstName" onChange={this.handleChange} required />
                                    </div>
                                    <div className="input-field">
                                        <input placeholder="Last Name" type="text" id="lastName" onChange={this.handleChange} required />
                                    </div>
                                    <div className="input-field">
                                        <input placeholder="Mobile" type="text" id="mobile" onChange={this.handleChange} required />
                                    </div>
                                    <div className="input-field">
                                        <input placeholder="Date of Birth" type="date" id="dob" onChange={this.handleChange} required />
                                    </div>
                                    <div className="input-field">
                                        <input placeholder="Email" type="email" id="email" onChange={this.handleChange} required />
                                    </div>
                                    <div className="input-field">
                                        <input placeholder="Username" type="text" id="username" onChange={this.handleChange} required />
                                    </div>
                                    <div className="input-field">
                                        <input placeholder="Password" type="password" id="password" onChange={this.handleChange} required />
                                    </div>
                                    <div className="input-field">
                                        <input placeholder="Confirm Password" type="password" id="confPassword" onChange={this.handleChange} required />
                                    </div>
                                    <input type="hidden" id="userType" value="customer"/>
                                    <div className="input-field">
                                        <button className="btn blue lighten-1 z-depth-0">Register</button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links">
                                    Already have an account?<p><NavLink to='/signin' className="text-blue">Sign In</NavLink></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;