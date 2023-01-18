import React from "react";
import Webapplication from './ITSERVICES/Webapplication'
import  MobileApplication from './ITSERVICES/Mobileapplication'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Services from "./Services";

var services =[
    {
        title:'Web Application',
        routename:'/Web-app'
    },
    {
        title:'Mobile Application',
        routename:'/mobileApp'
    },
    {
        title:'X-UI Design',
        routename:'/ux-ui'
    },
    {
        title:'projecct support',
        routename:'/project-support'
    }
]

//create Itservices  Component
function Itservices()
{
    return(<>
     <BrowserRouter>
       <div className="container-fluid">
   <h2>IT SERVICES</h2>

<p>Bridge the gap between your digital vision and reality with global technology services from HPE. Accelerate your digital transformation and gain the ability to operate from edge to cloud with the strategic help, operational support and training you need.

</p>

      <div className="container-fluid my-5 ">
    <div className="row">
        <div className="col-lg-3">
       {/*  <ul className="list-group">
           <li className="list-group-item">
            <Link to='/Itservices/Web-app'>Web Application Service</Link>
           </li>
           <li className="list-group-item">
            <Link to='/Itservices/mobileApp'>Mobile Application Service</Link>
           </li>
           <li className="list-group-item">
           <Link to='/Itservices/ux-ui'>UX-UI SERVICES</Link>
           </li>
           <li className="list-group-item">
            <Link to='/Itservices/support'>Project support Service</Link>
           </li>
          
            </ul>*/}
        
        <ul className="list-group">
            {
                services.map((data,i)=>
                {
                   return(<li className="list-group-item">
                    <Link to={`/Itservices${data.routename}`}>
                        {data.title}
                    </Link>
                   </li>)
                  })
            }

        </ul>
        </div>

        <div className="col-lg-9">
       
        <Switch>

          <Route exact path="/Itservices" component={Webapplication}/>
          <Route path="/Itservices/Web-app" component={Webapplication}/>
          <Route path="/Itservices/mobileApp" component={MobileApplication}/>
          <Route path="/Itservices/ux-ui" render={()=><h2>This is UX-UI SERVICES</h2>} />
          <Route path="/Itservices/project-support" render={()=><h2>This is PROJECT SUPPORT SERVICES</h2>} />
        </Switch>
        

        </div>
        </div>
    
    </div>
   </div>
   </BrowserRouter>
    </>)
}
export default Itservices;