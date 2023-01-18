import {React,useState} from 'react'

export default (props)=>{

//state object implementation
 var [stateEmail,setstateEmail] =useState("srikanth@gmail.com");

 //state object changes
let handleStateEmail=()=>
{
    setstateEmail("chinnu@gmail.com");
}
    return(<>
    <div className='container p-5'>
    <h1>react usestate hooks</h1>
    {stateEmail} <br /> <br />
    <button onClick={handleStateEmail}>Update Email</button>
    </div>
    



    </>)
 
}