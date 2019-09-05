import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AdminDashboard from '../admin/dashboard/AdminDashboard'
import Customers from '../admin/dashboard/Customers'
import AddCustomer from '../admin/dashboard/AddCustomer'
import AddDriver from '../admin/dashboard/AddDriver'
import AddVehicle from '../admin/dashboard/AddVehicle'
import AddHire from '../admin/dashboard/AddHire'

function Admin() {
  return (
    <BrowserRouter>
          <Switch>
            <Route exact path='/admin' component={AdminDashboard} />
            <Route path='/admin/customers' component={Customers} />
            <Route path='/admin/addcustomer' component={AddCustomer} />
            <Route path='/admin/adddriver' component={AddDriver} />
            <Route path='/admin/addvehicle' component={AddVehicle} />
            <Route path='/admin/addhire' component={AddHire} />
          </Switch>
    </BrowserRouter> 
  );
}

export default Admin;
