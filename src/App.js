import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Homepage from './components/dashboard/Homepage'
import About from './components/dashboard/About'
import Services from './components/dashboard/Services'
import Contact from './components/dashboard/Contact'
import Footer from './components/layout/Footer'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import {connect} from 'react-redux'

// Admin
import AdminDashboard from './components/admin/dashboard/AdminDashboard'
import Customers from './components/admin/dashboard/Customers'
import AddCustomer from './components/admin/dashboard/AddCustomer'
import AddDriver from './components/admin/dashboard/AddDriver'
import AddVehicle from './components/admin/dashboard/AddVehicle'
import AddHire from './components/admin/dashboard/AddHire'
import Hires from './components/admin/dashboard/Hires'
import Drivers from './components/admin/dashboard/Drivers'
import Vehicles from './components/admin/dashboard/Vehicles'
import AdminSidebar from './components/admin/layout/AdminSidebar'
import HireRequests from './components/admin/dashboard/HireRequests'
import OngoingHires from './components/admin/dashboard/OngoingHires'
import EditCustomer from './components/admin/dashboard/EditCustomer'


function App(props) {

  const {type} = props;

  const link = type.userType === "admin" ? null : <Footer/>
  const sidebar = type.userType === "admin" ? <AdminSidebar/> : null

  return (
    <BrowserRouter>
      <div className="App">
        <div className={type.userType === 'admin' ? "d-flex" : "wrapper"} id={type.userType === 'admin' ? "wrapper" : null}>
          {sidebar}
          <div id={type.userType === 'admin' ? "page-content-wrapper" : null} className={type.userType === 'admin' ? "" : null}> 
            <Navbar></Navbar>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/about' component={About}  />
              <Route path='/services' component={Services} />
              <Route path='/contact' component={Contact} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              
              <Route exact path='/admin' component={AdminDashboard} />
              <Route exact path='/admin/customers' component={Customers} />
              <Route path='/admin/addcustomer' component={AddCustomer} />
              <Route path='/admin/drivers' component={Drivers} />
              <Route path='/admin/adddriver' component={AddDriver} />
              <Route path='/admin/vehicles' component={Vehicles} />
              <Route path='/admin/addvehicle' component={AddVehicle} />
              <Route path='/admin/addhire' component={AddHire} />
              <Route path='/admin/hires' component={Hires} />
              <Route path='/admin/hirerequests' component={HireRequests} />
              <Route path='/admin/ongoinghires' component={OngoingHires} />
              <Route path='/admin/customers/:id' component={EditCustomer} />
            </Switch>
          </div>
        </div>
        {link}
      </div>
    </BrowserRouter> 
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    type: state.firebase.profile
  }
}

export default connect(mapStateToProps)(App);
