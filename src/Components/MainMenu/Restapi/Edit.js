import React,{component} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//global variable
var idno;
const url=` http://localhost:3001/users`
class Edit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            phone:'',
            txtConfirmation:''
        }
    }
    unamehandling=(e)=>{

        this.setState({name:e.target.value})
    }
    emailhandling=(e)=>{

        this.setState({email:e.target.value})
    }
    phonehandling=(e)=>{

        this.setState({phone:e.target.value})
    }
    submithandler=(e)=>{
        e.preventDefault();
        var formdata={
            'name':this.state.name,
            'email':this.state.email,
            'phone':this.state.phone

        }
        alert(JSON.stringify(formdata));
        
    axios.put(`http://localhost:3001/users/${idno}`,formdata)
    .then(()=>{window.alert("..created");this.props.history.push('/restapi')})

    }
    render(){
         idno= this.props.match.params.idno
        //this.props->history,loaction,match
        console.log(idno)
       //destructuring
       var {name,email,phone,txtConfirmation}=this.state
        return(<>
        
        <div className="container"> 
<h2 className="text-center mx-3">Edit component page</h2>
<form onSubmit={this.submithandler.bind(this)}>
    

    <div className="mb-3">
        <label className="form-label">name</label>
        <input type="text" className="form-control" value={name}  onChange={this.unamehandling.bind(this)}></input>
    </div>
    <div className="mb-3">
        <label className="form-label">name</label>
        <input type="email" className="form-control" value={email} onChange={this.emailhandling.bind(this)}></input>
    </div>
    <div className="mb-3">
        <label className="form-label">name</label>
        <input type="number" className="form-control" value={phone} onChange={this.phonehandling.bind(this)}></input>
    </div>
    <div className="mb-3">
    <Link className="btn btn-success mx-2 " to="/Restapi" >Goto Back</Link>
    <button type="submit" className="btn btn-warning text center" value="">Update</button>
    </div>
</form>




        </div>
        </> )
    }
componentDidMount()
{
    
   axios.get(`http://localhost:3001/users/${idno}`).then((result)=>this.setState(result.data)).catch(  )
}
}
export default Edit