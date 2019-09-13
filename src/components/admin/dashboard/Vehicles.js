import React, {Component} from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import AddVehicle from './AddVehicle'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

class Vehicles extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    static defaultProps = { // <-- DEFAULT PROPS
        vehicles: []       
    }
    
    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render () {
        const {vehicles} = this.props
        return(
            <div className="main-panel">
                <div id="content" className="container-fluid" role="main">
                    <br/><br/>
                    <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>+ Vehicle</Button>
                    <Collapse isOpen={this.state.collapse}>
                    <Card >
                        <CardBody className="centered">
                            <AddVehicle></AddVehicle>
                        </CardBody>
                    </Card>
                    </Collapse>
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th>Vehicle No</th>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Trailer No</th>
                            <th>Purchased Date</th>
                            <th>Engine Number</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {vehicles && vehicles.map(vehicle =>{
                            return(
                                <tr key={vehicle.id}>
                                    <td>{vehicle.vehicleNo}</td>
                                    <td>{vehicle.make}</td>
                                    <td>{vehicle.model}</td>
                                    <td>{vehicle.trailerNo}</td>
                                    <td>{vehicle.purchasedDate}</td>
                                    <td>{vehicle.engineNo}</td>
                                    <td>
                                        <button type="button" data-toggle="modal" data-id="" className="edit-details btn btn-primary" data-target="#edit">View</button>
                                    </td>
                                </tr> 
                            )
                        })}
                            {/* <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" data-toggle="modal" data-id="" className="edit-details btn btn-primary" data-target="#edit">View</button>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
    )
        }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        vehicles: state.firestore.ordered.vehicles
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'vehicles'}
    ])
)(Vehicles)