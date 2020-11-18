import React,{useEffect}from 'react';
import './pagenotfound.css'

import {useHistory} from 'react-router-dom';
const Pagenotfound=()=>
{
    const history=useHistory();
    const gohome=()=>{
        history.push('/homepage')
    }
    useEffect(()=>
    {
        console.log("pagenot fiund  c call")
    })
    
return(
    <>
    <h1>404</h1>
<p>Oops! Something is wrong.</p>
<a class="button" onClick={gohome}><i class="icon-home"></i> Go back in initial page, is better.</a>
    </>
)
}
export default Pagenotfound;