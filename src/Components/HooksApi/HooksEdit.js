import React,{ useEffect, useState} from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
//global variable
var idno;
const url=` http://localhost:3001/users`
export default (props)=>{
    
       let [userData,setStateUserData]=useState({
            name:'',
            email:'',
            phone:'',
            txtConfirmation:''
        });

           let {idno}=useParams();
 useEffect(()=>
    {
    
        axios.get(`${url}/${idno}`).then((result)=>setStateUserData(result.data)).catch(  )
     },[]);

        
            let formDatahandling=(e)=>{
                setStateUserData( {...userData, [e.target.name]:e.target.value});
            }
    
    let submithandler=(e)=>{

        e.preventDefault();

        var formdata={
            name:`${userData.name}`,
            email:`${userData.email}`,
            phone:`${userData.phone}`
        }
      
        
    axios.put(`http://localhost:3001/users/${idno}`,formdata)
    .then(()=>{
       // window.alert("..created");
        props.history.push('/hooksuser')})

    }
    
    
        
       //destructuring
       var {name,email,phone,txtConfirmation}=userData
        return(<>
        
        <div className="container"> 
<h2 className="text-center mx-3">Edit component page</h2>
<form onSubmit={submithandler.bind(this)}>
    

    <div className="mb-3">
        <label className="form-label">name</label>
        <input type="text" className="form-control" value={name}   name="name"onChange={formDatahandling.bind(this)}></input>
    </div>
    <div className="mb-3">
        <label className="form-label">name</label>
        <input type="email" className="form-control" value={email} name="email"onChange={formDatahandling.bind(this)}></input>
    </div>
    <div className="mb-3">
        <label className="form-label">name</label>
        <input type="number" className="form-control" value={phone} name="phone"onChange={formDatahandling.bind(this)}></input>
    </div>
    <div className="mb-3">
    <Link className="btn btn-success mx-2 " to="/hooksuser" >Goto Back</Link>
    <button type="submit" className="btn btn-warning text center" value="">Update</button>
    </div>
</form>




        </div>
        </> )
    }


