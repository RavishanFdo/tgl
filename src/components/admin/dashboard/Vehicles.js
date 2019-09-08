import React, {Component} from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import AddVehicle from './AddVehicle'

class Vehicles extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }
    
      toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
      }

    render () {
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
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th>Vehicle No</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Trailer No</th>
                        <th>Purchased Date</th>
                        <th>Engine Number</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button type="button" data-toggle="modal" data-id="" class="edit-details btn btn-primary" data-target="#edit">View</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
        }
}

export default Vehicles