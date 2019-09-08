import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class AddCustomer extends Component {
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
                <div className="container">
                    <br/>
                    <h2 className="center">Add Customer</h2><br/><br/>
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
                                <input placeholder="Username" type="text" id="username" onChange={this.handleChange} required />
                            </div>
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

export default AddCustomer;