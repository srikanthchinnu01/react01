//header module 

import React from "react"

import { Link, NavLink } from 'react-router-dom';
 

function Header() {
 var menunames=["Home","About","Services","Itservices","Contact","Myclass","Lifecycle","Restapi","RB","Signup","RRC","RHuseState",
 "RHuseEffect","pagination","HooksUser","HooksSignup","HooksRedux"]

    return(<>

    
    {/*Link for Menu*/}
    <nav className="navbar navbar-expand-lg navbar-light" style={{
        backgroundColor:'#475562',
        borderBottom: '0.5px white solid',
        bordertop:'0.5px white solid'
    }}>
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
     {/* <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active text-white"activeStyle={{backgroundColor:'black'}} to="/Home">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link  text-white"  activeClassName="bg-dark" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link text-white" activeClassName="bg-dark" to="/Services">Services</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link text-white" activeClassName="bg-dark" to="/Contact">Contact</NavLink>
        </li>
</ul> */}
<ul className="navbar-nav">
    {
        menunames.map((data,i)=>
        <li className="nav-item px-1" key={i}>
        <NavLink activeClassName="bg-dark" className="nav-link text-white"  to={`/${data.toLowerCase()}`}>{data}</NavLink>
        </li>

        )
    }
</ul>

    </div>
  </div>
</nav>
    {/* <Link to="/Home">Home</Link> &nbsp;&nbsp;
    <Link to="/About">About</Link> &nbsp;&nbsp;
    <Link to="/Services">Services</Link> &nbsp;&nbsp;
    <Link to="/Contact">Contact</Link> &nbsp;&nbsp; */}

    </>)
}

export default Header;



