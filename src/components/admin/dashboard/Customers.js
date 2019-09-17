import React, {Component} from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import AddCustomer from './AddCustomer'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'


class Customers extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }
    
      toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
      }

    render () {
        const {auth, customers} = this.props
        if (!auth.uid) return <Redirect to='/signin' />
        return(
        // <div className="main-panel">
            <div id="content" className="container-fluid" role="main">
                <br/><br/><br/><br/>
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>+ Customer</Button>
                <Collapse isOpen={this.state.collapse}>
                <Card >
                    <CardBody className="centered">
                        <AddCustomer></AddCustomer>
                    </CardBody>
                </Card>
                </Collapse>
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>User Since</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers && customers.map(customer => {
                        return(
                            <tr key={customer.id}>
                                <td>{customer.firstName + ' ' + customer.lastName}</td>
                                <td>{customer.email}</td>
                                <td>{customer.mobile}</td>
                                <td>{customer.id}</td>
                                <td>
                                    <button type="button" data-toggle="modal" data-id="" class="edit-details btn btn-primary" data-target="#edit">View</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        // </div>
    )
        }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        customers: state.firestore.ordered.customers
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'customers'}
    ])
)(Customers)