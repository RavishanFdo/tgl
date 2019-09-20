import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {editCustomer} from '../../../store/actions/adminActions'

class EditCustomer extends Component {

    state = {
        id: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        mobile: '',
        dob: '',
        loading: 1,
        updated: 1

    }
    componentWillReceiveProps(nextProps) {
        
        if(this.props.customer){
            this.setState({
                ...nextProps.customer[0],loading: 0,updated: !this.state.updated
            });
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleDate = (e) => {
        e.preventDefault();
        e.target.type = 'date'
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editCustomer(this.props.id, this.state)
        this.setState({
            updated: 0
        })
    }

    render() {
        const load = this.state.loading === 0 ? (
            <div className="container">
                    <h2 className="center" style={{paddingTop: '100px'}}>Edit Customer</h2><br/><br/>
                    <div className="green-text center">
                        <h4>{this.state.updated ? "Updated Successfully" : null}</h4>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col-6">
                                <input placeholder="First Name" type="text" id="firstName" value={this.state.firstName}  onChange={this.handleChange} required />
                            </div>
                            <div className="input-field col-6">
                                <input placeholder="Last Name" type="text" id="lastName" value={this.state.lastName}  onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col-6">
                                <input placeholder="Mobile" type="text" id="mobile" value={this.state.mobile} onChange={this.handleChange} required />
                            </div>
                            <div className="input-field col-6">
                                <input placeholder="Date of Birth" onFocus={this.handleDate} type="text" id="dob" value={this.state.dob} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div className="input-field row col-6">
                            <input placeholder="Email" type="email" id="email" value={this.state.email}  onChange={this.handleChange} required />
                        </div>
                        <div className="input-field center">
                            <button className="btn blue lighten-1 z-depth-0">Update</button>
                        </div>
                    </form>
                </div>
                
        ) : <div><br/><br/><br/>Loading</div>
        return <div>{load}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    
    let id = ownProps.match.params.id;
    return{
        id: id,
        customer: state.firestore.ordered.customers,
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return{
        editCustomer: (id, customer) => dispatch(editCustomer(id,customer))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect(props => [{
        collection: 'customers',
        doc: props.id
    }])
)(EditCustomer)