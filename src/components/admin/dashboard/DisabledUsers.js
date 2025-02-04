import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import DisabledDrivers from './drivers/DisabledDrivers'
import DisabledCustomers from './customers/DisabledCustomers'
import DisabledVehicles from './vehicles/DisabledVehicles'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'


class ManageCustomer extends Component {
    static defaultProps = { 
        hires: []       
    }

    state = {
        loading: 1
    }

    componentWillReceiveProps(nextProps) {
        
        if(this.props.customers && this.props.drivers && this.props.vehicles){
            this.setState({
                ...nextProps,
                loading: 0
            });
        }
    }

    render() {
        const {auth} = this.props
        // if (!auth.uid) return <Redirect to='/signin' />

        const customers = this.props.customers
        const drivers = this.props.drivers
        const vehicles = this.props.vehicles
        
        
        const load = this.state.loading === 0 ? (
            <div id="content" className="container-fluid" role="main">
                <br/><br/><br/><br/>
                <Tabs className="center">
                    <TabList className="center">
                        <Tab>Customers</Tab>
                        <Tab>Drivers</Tab>
                        <Tab>Vehicles</Tab>
                    </TabList>
                    <br/><br/>
                    <TabPanel>
                        <DisabledCustomers customers={customers.filter(item => item.disabled === true)} history={this.props.history}></DisabledCustomers>
                    </TabPanel>
                    <TabPanel>
                        <DisabledDrivers drivers={drivers.filter(item => item.disabled === true)} history={this.props.history}></DisabledDrivers>
                    </TabPanel>
                    <TabPanel>
                        <DisabledVehicles vehicles={vehicles.filter(item => item.disabled === true)} history={this.props.history}></DisabledVehicles>
                    </TabPanel>
                </Tabs>
            </div>
        ): <div><br/><br/><br/>Loading</div>
        return <div>{load}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        drivers: state.firestore.ordered.drivers,
        customers: state.firestore.ordered.customers,
        vehicles: state.firestore.ordered.vehicles
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'drivers'},
        {collection: 'customers'},
        {collection: 'vehicles'}
    ])
)(ManageCustomer)