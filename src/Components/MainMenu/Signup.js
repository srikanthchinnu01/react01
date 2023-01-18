import React,{Component} from "react";
import axios from "axios";
const url=` http://localhost:3001/users`
 class Signup extends Component{
    constructor(props){
        super(props)
        this.state =
        {
            uname:'',
            email:'',
            phone:'',
            txtConfirmation:''

        }

    }
    //name input textbox
    unamehandling=(e)=>{

        this.setState({uname:e.target.value})
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
            'name':this.state.uname,
            'email':this.state.email,
            'phone':this.state.phone

        }
        alert(JSON.stringify(formdata));
        {/*axios.post(url,formdata)
        .then(()=>window.alert("...created..."))
    .catch(()=>window.alert("..error"))
    axios.post(url,formdata)
        .then(()=>this.setState({txtConfirmation:"account Created"}))
    .catch(()=>this.setState({txtConfirmation:"account Created failed"}));*/}
    axios.post(url,formdata).then(()=>{window.alert("..created");this.props.history.push('/restapi')})

    }
    render(){
        console.log(this.props)
        //destructuring
        var {uname,email,phone,txtConfirmation}=this.state
        return(<>
        
        <div className="container p-3" >
            <h3 className="py-3 text-center">Registration form</h3>
            <form onSubmit={this.submithandler.bind(this)}>

               <div className="container w-50">
               <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value={uname}  onChange={this.unamehandling.bind(this)}/>
            
            
            </div>
            <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email}  onChange={this.emailhandling.bind(this)} />
            </div>
            <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="number" className="form-control" value={phone}  onChange={this.phonehandling.bind(this)} />
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
 }

 export default Signup;