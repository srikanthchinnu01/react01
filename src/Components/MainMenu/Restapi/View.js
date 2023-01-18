import React,{component} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//global variable
var idno;
const url=` http://localhost:3001/users`
class view extends React.Component{
    constructor(props){
        super(props)
        this.state={
           // viewdata:{}
        }
    }
    render(){
         idno= this.props.match.params.idno
        //this.props->history,loaction,match
        console.log(idno)
        return(<>
        <div className="container"> 
<h2>view component page</h2>
<p>
    {idno} th Record data
</p>
<ul>
    <li>{this.state.id}</li>
    <li>{this.state.name}</li>
    <li>{this.state.email}</li>
    <li>{this.state.phone}</li>
</ul>

<Link className="btn btn-success" to="/Restapi" >Goto Back</Link>

        </div>
        </> )
    }
componentDidMount()
{
    const url=` http://localhost:3001/users/${idno}`
   axios.get(url).then((result)=>this.setState(result.data)).catch(  )
}
}
export default view;









