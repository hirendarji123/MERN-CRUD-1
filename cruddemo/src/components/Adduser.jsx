import React, { useState, useEffect } from 'react';

import './Adduser.css';
import { useForm } from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
const Adduser=()=>
{
   // console.log("addd user:-",props);
   useEffect(()=>
    {
        console.log("add user c call")
    })
    const { register, handleSubmit, errors,} = useForm();
    const[match,setMatch]=useState('');
    const[error,setError]=useState(false);
    const history=useHistory();

    function change()
    {

    }
    
    
    

    const submit=(e)=>
    {
        console.log(e);
        if(e["password"]===e["confirm_password"])
        {
            console.log("same")
            setMatch('')
            axios.post('http://localhost:4000/user/',e).then((res)=>{
                console.log("on submit:-",res)
                })
            .catch((err)=>{console.log("add error",err)})

        document.getElementById("create-course-form").reset();
        history.push('/users');
    
    
                
                
        }
        else
        {
            console.log("not same");
            setMatch("pass word not match")
        }
}
const checkEmail=()=>
{
    
}

const checkUserName=(e)=>
{
console.log(e.target.value);
let username=e.target.value;

        axios.get('http://localhost:4000/user/'+username).then(res=>{
            console.log("api response for usernam",res["data"][0]);
            if(res["data"][0]["username"] == username)
            {
                setError(true);
            }
            
        }).catch((err)=>console.log(err));
}
    return(
        <>
        <Navbar/>
        <div className="wrapper">
	<div className="login-box">
		<h3 className="info-text" style={{color:"white"}}>User Registration</h3>
		<form className="form-container" id="create-course-form" onSubmit={handleSubmit(submit)}>
			
        <div className="input-addon">
				<input className="form-element input-field"       name="name" ref={register({required:true})} placeholder="name" type="text" />
                
             </div>

            {errors.name && ' Name is required.'}

            
           <div className="input-addon">
				<input className="form-element input-field" name="email" ref={register({required:true})} placeholder="Email" type="email" />
					</div>
                    {errors.email && ' email is required.'}

                    <div className="input-addon">
				<input className="form-element input-field"  onChange={ checkUserName} defaultValue="" name="username" ref={register({required:true})} placeholder="username" type="text" />
                <p style={error?{display:"inline-block"}:{display:'none'}}>username alerdy exist</p>
             </div>
            {errors.username && ' userName is required.'}
			
			<div className="input-addon">
				<input className="form-element input-field" defaultValue="" onChange={change} name="password" ref={register({required:true})} placeholder="Password" type="password" />
							</div>
                            {errors.password && ' pasword is required.'}
			<div className="input-addon">
				<input className="form-element input-field" defaultValue="" onChange={change} name="confirm_password" ref={register({required:true})} placeholder="Re-type password" type="password" />
				
			</div>
            {errors.confirm_password && ' pasword is required.'}
    <p>{match}</p>
			<input className="form-element is-submit"  type="submit" value="Create User" />
            
            
       </form>
			</div>
</div>
</>
    )
}

export default Adduser;