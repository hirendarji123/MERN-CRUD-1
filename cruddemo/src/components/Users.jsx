import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Users.css';
import {useHistory} from 'react-router-dom';

import Navbar from './Navbar';
const Users=()=>
{
    const [data2,setData2]=useState([]);
    const history=useHistory();
    useEffect(()=>
    {getdata();
    },[]);

    function update(item)
    {

        console.log(item["_id"]);
        console.log(item);
        history.push({pathname: '/update',
        data2:item});
    }

    function getdata()
    {

        axios.get('http://localhost:4000/user/').then(res=>{
            console.log("api response",res["data"]);
            setData2(res.data);
        }).catch((err)=>console.log(err));
    }

    
    function deleteuser(item)
    {
        console.log(item["_id"]);
        console.log(item)
        axios.delete('http://localhost:4000/user/'+item["_id"]).then(res=>{
            console.log("delete",res);
            getdata();
        }).catch((err)=>{console.log(err)});
    }

 //   console.log("data",data);
    return(
    <>
    <Navbar/>
<br/>
<div style={{overflowX:"auto"}}>


<table >
    <thead>
        <tr>
            <th>User name</th>
            <th>Email</th>
            <th>Delte</th>
            <th>Update</th>

    
        </tr>
    </thead>
    <tbody>

    {
        
    data2.map((e,i)=>
            {
                
                return(<tr key={i}>
                    
                    <td >{e.username}</td>
                    <td >{e.email}</td>
                    <td key={e.username} ><button onClick={deleteuser.bind(this,e)} className="btn btn-danger">Delete</button></td>
                    <td><button onClick={update.bind(this,e)} className="btn btn-primary">Update</button></td>
                </tr>
                )
            })
    }   
 </tbody>
    
</table>
</div>
</>
    )
}

   
    
export default Users;