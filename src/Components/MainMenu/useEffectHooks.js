import {React,useState,useEffect} from 'react'
import axios  from 'axios';
const apiurl=`https://fakestoreapi.com/products`


export default (props)=>{

//state object implementation by hooks
 var [produts,setStateproducts] =useState([]);
//api calls by hooks
 useEffect(()=>
 {
    axios.get(apiurl).then((result)=>setStateproducts(result.data))

},[])
 //state object changes

    return(<>
    <div className='container p-5'>
    <h1 className='text-center p-5'>react UseEffect hooks</h1>

    <div className='row'>
    {
        produts.map((res,i)=>{
           return(<div className="col-lg-3" key={i}>
            <div className="card">
                <img src={res.image} className="card-img-top w-50 mx-auto my-2" style={{height:'200px'}} />
            <div className="card-body text-center">
              <h5 className="card-title">{res.title}</h5>
              <h6 className="card-title">{res.price}</h6>
              <p className="card-text">{res.description.slice(0,30)}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
           </div>) 
           
        })
    }

    </div>
    
    </div>
    



    </>)
 
}