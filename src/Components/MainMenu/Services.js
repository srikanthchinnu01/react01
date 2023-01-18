//Services.js ->Module

import React from "react"
//importing_fontawesomeicons
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee,fafacoffee } from '@fortawesome/free-solid-svg-icons'

//import external local json data into component
import ServiceData from './../../Assets/json/Services.json'

//styles
var bgc={backgroundColor:'#12151c'}


//Create Services Component
function Services() {
    
    return(<>
        <div className="container-fluid" style={bgc}>
            <div className="container p-5 text-center">
                <h1 class="pt-2 pb-5 text-white">SERVICES</h1>
                <div className="row">
                          {
                            ServiceData.map((data,i)=>{
                                return(<div className="col-lg-4">
                                <div className="card text-center text-white p-3" style={bgc}>
                                {/*<p>
                                  <FontAwesomeIcon icon={data.icon} size="4x" className="fw-bold text-success"/>
                            </p>*/}
                                    <div className="card-body">
                                        <h3 className="py-3">{data.title}</h3>
                                        <p className="text-justify">{data.description}</p>
                                    </div>
        
                                </div>
        
                            </div>)

                            })
                          }


                    {/*<div className="col-lg-4">
                        <div className="card text-center text-white p-3" style={bgc}>
                            <i className="fab fa-adobe text-weight-bold text-success"></i>
                            <div className="card-body">
                                <h3 className="py-3">UX/UI DESIGN</h3>
                                <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className="card text-center text-white p-3" style={bgc}>
                            <i className="fab fa-adobe text-weight-bold text-success"></i>
                            <div className="card-body">
                                <h3 className="py-3">MARKETING</h3>
                                <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className="card text-center text-white p-3" style={bgc}>
                            <i className="fab fa-adobe text-weight-bold text-success"></i>
                            <div className="card-body">
                                <h3 className="py-3">BRANDING</h3>
                                <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>

                        </div>

                    </div>
    */}
                </div>
            </div>
        </div>
        
        </>)

     
}

export default Services;
