import React, { useState, useEffect } from 'react';
import './login.css';

import { useForm } from 'react-hook-form';

import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Login= (props)=>
{
    const { register, handleSubmit, errors,} = useForm();
    const[match,setMatch]=useState('');
    const[error,setError]=useState(false);
    const history=useHistory();
    useEffect(()=>
    {
        console.log("login c call")
    })
    

    const submit=(e)=>
    {
        console.log("data",e);
        var username=e["username"];
       // console.log(username)
           axios.get('http://localhost:4000/user/'+username).then((res)=>{
            console.log("recive data:-",res.data[0])
            if(res.data[0]== undefined)
            {
                setMatch(" Username or password  is Wrong");
            }
            if( e["username"]==res.data[0]["username"]  && e["password"]==res.data[0]["password"])
            {
                console.log("username and pass both are right");
                
                localStorage.setItem("Login",true);
                console.log("login value",localStorage.getItem("Login"));
                
                
                history.push('/homepage');
                

            }
            else
            {
                setMatch(" Username or password  is Wrong");
            }
                })
            .catch((err)=>{console.log("add error",err)})

    
    
                
                
        
}

return(

<div className="container">
<div className="row">
    <div className="col-lg-3 col-md-2"></div>
    <div className="col-lg-6 col-md-8 login-box">
        <div className="col-lg-12 login-key">
            <i className="fa fa-key" aria-hidden="true"></i>
        </div>
        <div className="col-lg-12 login-title">
            User Login
        </div>

        <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
                <form>
                <p>{match}</p>
                
                    <div className="form-group">
                        <label className="form-control-label">USERNAME</label>
                        <input type="text"  name="username" ref={register({required:true})} className="form-control" />
                    </div>
                    {errors.username && ' userName is required.'}
                    <div className="form-group">
                        <label className="form-control-label">PASSWORD</label>
                        <input type="password"  name="password" ref={register({required:true})} className="form-control" />
                    </div>
                    {errors.password && ' pasword is required.'}

                    <div className="col-lg-12 loginbttm">
                        <div className="col-lg-6 login-btm login-text">
                           
                        </div>
                        <div className="col-lg-6 login-btm login-button">
                            <button type="submit" onClick={handleSubmit(submit)} className="btn btn-outline-primary">LOGIN</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="col-lg-3 col-md-2"></div>
    </div>
</div>
</div>





  

)
}
export default Login;