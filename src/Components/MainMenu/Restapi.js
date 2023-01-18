
import React from "react";

import axios from "axios";
import { Link } from "react-router-dom";
//global_variable for restapi-url
const url=` http://localhost:3001/users`//array type of object

class Restapi extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userData:[]

        }
    }
    getdata=()=>{
        axios.get(url).then((result)=>this.setState({userData:result.data})).catch(  )

    }
    
  //function
  DeleteHandler=(id) =>{
    
  
  if(window.confirm(`Delete the Record Number ${id}`)){
    //Dele id record
    axios.delete(`${url}/${id}`)
    //fetch the rest of therecords
    this.getdata()
  }
  }  


render(){
    return(<>
    <div className="container p-5">
        <h3 className="text-center">Fetch Restapi Data Using Loacl URL/client</h3>
        <table className="table table-dark table-bordered my-">
            <thead className="table table-light">
                <tr>
                    <th>sNo</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>Phone</th>
                    <th colSpan='3' className="text-center">Action</th>
                </tr>
            </thead>

   
       <tbody>
       {
            this.state.userData.map((res,i)=>{
            return(<tr key={i}>
                <td>{i+1}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.phone}</td>
                <td>
                    <Link to={`/Restapi/view/${res.id}`} className="btn btn-primary">view</Link>
                    </td>
                    <td>
                    <Link to={`/Restapi/edit/${res.id}`} className="btn btn-warning">Edit</Link>
                    </td>
                    <td>
                    <button onClick={()=>this.DeleteHandler(res.id)} className="btn btn-success">Delete</button>
                    </td>


            </tr>)
            })
            }
       </tbody>
        
             </table>
    </div>
    </>)
}
componentDidMount()
    {
       this.getdata()
    }
}


export default Restapi;