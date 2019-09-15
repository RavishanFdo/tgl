import React, {Component} from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import AddDriver from './AddDriver'


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
        return(
        <div className="main-panel">
            <div id="content" className="container-fluid" role="main">
                <br/><br/>
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
                        <th>Name</th>
                        <th>License No</th>
                        <th>NIC</th>
                        <th>Mobile</th>
                        {/* <th>Username</th> */}
                        <th>User Since</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        {/* <td></td> */}
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

export default Drivers