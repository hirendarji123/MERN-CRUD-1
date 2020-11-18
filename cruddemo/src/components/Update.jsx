import React, { useState, useEffect } from 'react';

import './Adduser.css';
import { useForm } from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
const Update=(props)=>
{
   //   console.log("update user:-",props.location.data2);
    const { register, handleSubmit, errors,} = useForm();
    const[match,setMatch]=useState('');
    const[error,setError]=useState(false);
    const [userdata,setData]=useState("");
    const history=useHistory();
    var newdata;


    const nullableEntry = {

                                name: props.location.data2.name,
                                email:props.location.data2.email,
                                username: props.location.data2.username,
                                password: "",
                                confirm_password: ""
                             };

      //console.log("nulll entry:-",nullableEntry)

      const [editing, setEditing] = useState(nullableEntry);
      
        function handleHoursInput(e) {
            //  console.log(e.target.name);
            let pp=e.target.name;
          let newEdit = { ...editing };

      //   console.log("onchange:-",e.target.value); 
      
          setEditing({newEdit, pp});
         
         

          

        }
    
    
    
    function change(e)
    {

        console.log(e.target.value)
    }
    
    
    

    const submit=(e)=>
    {
        console.log(e);
        if(e["password"]===e["confirm_password"])
        {
            console.log("same")
            setMatch('')
            axios.put('http://localhost:4000/user/'+props.location.data2._id,e).then((res)=>{
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
		<h3 className="info-text" style={{color:"white"}}>Update Details</h3>
		<form className="form-container" id="create-course-form" onSubmit={handleSubmit(submit)}>
			
        <div className="input-addon">
				<input className="form-element input-field"  value={editing.name}      onChange={handleHoursInput}    name="name" ref={register({required:true})} placeholder="name" type="text" />
                
             </div>

            {errors.name && ' Name is required.'}

            
           <div className="input-addon">
				<input className="form-element input-field" value={editing.email} onChange={handleHoursInput} name="email" ref={register({required:true})} placeholder="Email" type="email" />
					</div>
                    {errors.email && ' email is required.'}

                    <div className="input-addon">
				<input className="form-element input-field" value={editing.username}     onChange={ handleHoursInput}  name="username" ref={register({required:true})} placeholder="username" type="text" />
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
			<input className="form-element is-submit"  type="submit" value="Submit" />
            
            
       </form>
			</div>
</div>
</>
    )
}

export default Update;