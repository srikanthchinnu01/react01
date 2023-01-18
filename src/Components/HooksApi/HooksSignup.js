import React,{useState,useEffect} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const url=` http://localhost:3001/users`

 export default (props)=>{
    
        var [userData,setStateUserData]=useState({
        
            name:'',
            email:'',
            phone:'',
            txtConfirmation:''

        })
 //destructuring
 var {name,email,phone,txtConfirmation}=userData
   /* 
    //name input textbox
    unamehandling=(e)=>{

        this.setState({uname:e.target.value})
    }
    emailhandling=(e)=>{

        this.setState({email:e.target.value})
    }
    phonehandling=(e)=>{

        this.setState({phone:e.target.value})
    }*/
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
       
       
    axios.post(url,formdata).then(()=>{
        //window.alert("..created");
    props.history.push('/restapi')
})

    }
    
       
        return(<>
        
        <div className="container p-3" >
            <h3 className="py-3 text-center">Registration form</h3>
            <form onSubmit={submithandler.bind(this)}>

               <div className="container w-50">
               <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value={name} name="name"  onChange={formDatahandling.bind(this)}/>
            
            
            </div>
            <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email} name="email" onChange={formDatahandling.bind(this)} />
            </div>
            <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="number" className="form-control" value={phone} name="phone"  onChange={formDatahandling.bind(this)} />
            </div>
            <div className="mb-3">
            
            <button type="submit" className="btn btn-primary">create Account</button>  
            <p className="text-primary">{txtConfirmation}</p>
            </div>
               </div>

            </form>

        </div>
        </>)
    }
 

 