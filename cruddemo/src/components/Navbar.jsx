import React,{useEffect}from 'react';
import { NavLink,withRouter} from 'react-router-dom';

const Navbar=()=>
{
  useEffect(()=>
    {
        console.log("navbar c call")
    })
  const logout=()=>
  {
    localStorage.setItem("Login",false);
  }
    return(
    
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <a className="navbar-brand" href="#">Crud operation</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
                 </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      
      <li className="nav-item active">
      <NavLink className="nav-link "  to="/users"> Show User</NavLink>
      </li>
      
      <li className="nav-item">

      <NavLink className="nav-link "   to="/adduser"> Add User</NavLink>
      </li>

      <li className="nav-item">

      <NavLink className="nav-link " onClick={logout} exact to="/login"> Logout</NavLink>
      </li>
      
    </ul>
    </div>
</nav>
</div>
    
    )

}

export default  withRouter(Navbar);