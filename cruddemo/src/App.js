import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Adduser from './components/Adduser';
import Users from './components/Users';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Pagenotfound from './components/Pagenotfound'
import { Route, Switch } from 'react-router-dom';
import GuardedRoute from './GuardedRoute';
import Update from './components/Update';

function App() {

  
  return (
    <>
 <Switch>
       <Route exact path='/' component={Login}  />

       <Route exact path='/login' component={Login}  />
       {console.log(localStorage.getItem("Login")) }

<GuardedRoute path='/homepage' component={Homepage} auth ={localStorage.getItem("Login")} />

<GuardedRoute path='/users' component={Users} auth ={localStorage.getItem("Login")} />

<GuardedRoute path='/adduser' component={Adduser} auth ={localStorage.getItem("Login")} />    

<GuardedRoute path='/update' component={Update} auth ={localStorage.getItem("Login")} /> 

<Route  component={Pagenotfound} /> 

     
    
    
    
      </Switch>
    </>
  );
}

export default App;
