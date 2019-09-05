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

// Admin
import AdminNav from './components/admin/AdminNav'
import AdminDashboard from './components/admin/dashboard/AdminDashboard'
import Customers from './components/admin/dashboard/Customers'
import AddCustomer from './components/admin/dashboard/AddCustomer'
import AddDriver from './components/admin/dashboard/AddDriver'
import AddVehicle from './components/admin/dashboard/AddVehicle'
import AddHire from './components/admin/dashboard/AddHire'
import Hires from './components/admin/dashboard/Hires'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/about' component={About}  />
            <Route path='/services' component={Services} />
            <Route path='/contact' component={Contact} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            
            <Route exact path='/admin' component={AdminDashboard} />
            <Route path='/admin/customers' component={Customers} />
            <Route path='/admin/addcustomer' component={AddCustomer} />
            <Route path='/admin/adddriver' component={AddDriver} />
            <Route path='/admin/addvehicle' component={AddVehicle} />
            <Route path='/admin/addhire' component={AddHire} />
            <Route path='/admin/hires' component={Hires} />
          </Switch>
        </div>
        {/* <Footer></Footer> */}
      </div>
    </BrowserRouter> 
  );
}

export default App;
