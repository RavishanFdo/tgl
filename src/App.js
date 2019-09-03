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
import AdminDashboard from './components/admin/dashboard/AdminDashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/about' component={About}  />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/admin' component={AdminDashboard} />
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter> 
  );
}

export default App;
