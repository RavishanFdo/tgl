import React, {Component} from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {Badge} from 'react-bootstrap'
import AddDriver from './AddDriver'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'



class Drivers extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }
    
      toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
      }

    render () {
        const {auth, drivers} = this.props
        if (!auth.uid) return <Redirect to='/signin' />
        return(
        // <div className="main-panel">
            <div id="content" className="container-fluid" role="main">
                <br/><br/><br/><br/>
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>+ Driver</Button>
                <Collapse isOpen={this.state.collapse}>
                <Card >
                    <CardBody className="centered">
                        <AddDriver></AddDriver>
                    </CardBody>
                </Card>
                </Collapse>
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th className="center-align">Name</th>
                        <th className="center-align">License No</th>
                        <th className="center-align">NIC</th>
                        <th className="center-align">Mobile</th>
                        <th className="center-align">User Since</th>
                        <th className="center-align">Status</th>
                        <th className="center-align">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {drivers && drivers.map(driver => {
                        return (
                            <tr key={driver.id}>
                                <td className="center-align">{driver.firstName + ' ' + driver.lastName}</td>
                                <td className="center-align">{driver.licenseNo}</td>
                                <td className="center-align">{driver.nic}</td>
                                <td className="center-align">{driver.mobile}</td>
                                <td className="center-align">{driver.id}</td>
                                <td className="center-align"><Badge variant="primary">On Hire</Badge></td>
                                <td className="center-align">
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
        drivers: state.firestore.ordered.drivers
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'drivers'}
    ])
)(Drivers)