//Routing_js_Module 
import React from "react";

//router_package
import {BrowserRouter,Route,Link,Switch,Redirect} from 'react-router-dom'

//Functional_Component_Nesting_into_routings

import Header from "./MainMenu/Header";
import Home from "./MainMenu/Home";
import About from "./MainMenu/About";
import Services from "./MainMenu/Services";
import Contact from "./MainMenu/Contact";
import Footer from "./MainMenu/Footer";
import pagenotfound from "./Pagenotfound";
import Itservices from "./MainMenu/Itservices";

//class_Component

import Myclass from "./MainMenu/Myclass"
import Lifecycle from "./MainMenu/Lifecycle"
import Restapi from "./MainMenu/Restapi"
import view from "./MainMenu/Restapi/View"
import Edit from "./MainMenu/Restapi/Edit"
import Signup from "./MainMenu/Signup"
import ReactBootstrap from "./MainMenu/ReactBootstrap"
import ReactReduxconnection from "./MainMenu/ReactReduxconnection"

//React hooks
import RHusestate from './MainMenu/useStateHooks'
import RHuseEffect from './MainMenu/useEffectHooks'
import pagination from './MainMenu/Pagination'
import HooksUser from './HooksApi/Hooksuser'
import Hooksview from './HooksApi/HooksView'
import HooksEdit from './HooksApi/HooksEdit'
import HooksSignup from './HooksApi/HooksSignup'
import HooksRedux from './Hooksredux/HooksRedux'



//Routing_setup

function Routings()
{

    return( <BrowserRouter>

    {/* Link for Menu
    <Link to="/Home">Home</Link> &nbsp;&nbsp;
    <Link to="/About">About</Link> &nbsp;&nbsp;
    <Link to="/Services">Services</Link> &nbsp;&nbsp;
    <Link to="/Contact">Contact</Link> &nbsp;&nbsp;

    <br/><br/><br />*/}

    {/*Navbar Links*/ }
    <Header />
   {/*Navbar Links*/ }
<Switch>   
     {/* <Load Home component as Default page of the project/>*/}
    <Route exact path="/" component={Home} />


    {/* <Home />*/}
     <Route path="/home" component={Home} />

    {/* <About />*/}
    <Route path="/About" component={About} />
     
     {/* <Services />*/}
    <Route path="/Services" component={Services} />

    {/* <Services />*/}
    <Route path="/itservices" component={Itservices} />

     {/* <Contact />*/}
     <Route path="/Contact" component={Contact} />

     {/* <Myclass/>*/}
     <Route path="/Myclass" component={Myclass} />

      {/* <Lifecycle/>*/}
      <Route path="/Lifecycle" component={Lifecycle} />

       {/* <Restapi/>*/}
       <Route exact path="/restapi" component={Restapi} />
       
       {/* <view with router parameter/>*/}
       <Route  path="/restapi/view/:idno" component={view} />

       {/* <edit with router parameter/>*/}
       <Route  path="/restapi/edit/:idno" component={Edit} />
       
       {/* <React bootstrap/>*/}
       <Route exact path="/rb" component={ReactBootstrap} />

        {/* <signup bootstrap/>*/}
        <Route exact path="/signup" component={Signup} />

        {/* <Rhusestate bootstrap/>*/}
        <Route  path="/rhusestate" component={RHusestate} />

        {/* <Rhusestate bootstrap/>*/}
        <Route  path="/rhuseeffect" component={RHuseEffect} />

         {/* <Rhusestate bootstrap/>*/}
         <Route  path="/pagination" component={pagination} />
         {/* <Rhusestate bootstrap/>*/}
         <Route exact path="/hooksuser" component={HooksUser} />
         <Route  path="/hooksuser/view/:idno" component={Hooksview} />
         <Route  path="/hooksuser/edit/:idno" component={HooksEdit} />

         {/* <React redux/>*/}
         <Route  path="/rrc" component={ReactReduxconnection} />

         {/* <React redux/>*/}
         <Route  path="/hooksSignup" component={HooksSignup} />
         {/* <hooks redux/>*/}
         <Route  path="/hooksredux" component={HooksRedux} />






     {/* auto redirect to home componentif invalid path from url address bar*/}

     <Redirect to="/Home">

      {/* <pagenotfound />*/}
      <Route  component={pagenotfound} />
      </Redirect>
    </Switch>

     {/*Fooetr Links*/ }
    <Footer />
   {/*Fooetr Links*/ }


     

    </BrowserRouter> )
}

export default Routings;