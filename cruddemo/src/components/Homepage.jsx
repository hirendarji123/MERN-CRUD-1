import React,{useEffect} from 'react';
import Navbar from './Navbar';

const Homepage=()=>
{
    useEffect(()=>
    {
        console.log("hompae c call")
    })
    return(
        <>
        <Navbar/>
        </>

    )
}
export default Homepage;