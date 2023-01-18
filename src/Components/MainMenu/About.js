//About.js ->Module

import React,{Fragment} from "react"

//profile_photo
import profile from './../../Assets/images/chinnu.jpg'

//styles
var h={height:'20px'}


//Create About Component
function About() {
    return(<>
       <div className="container-fluid" style={{backgroundColor:'#12151c'}}>
        <div className="container p-5 w-75 text-center">
            <h1 className="display-4 text-white fw-bold py-3">ABOUT US</h1>
            <p className="text-white pb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <div className="jumbotron text-white p-5" style={{borderRadius:'10px',backgroundColor:'#475562 '}}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="container w-100">
                            <table className="table table-borderless text-white">
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <td><img src={profile} style={{borderRadius:'20px',width:'35%', height:'60px'}}/></td>
                                    </tr>
                                    <tr>
                                        <th>FULLNAME</th>
                                        <td>Srikanth</td>
                                    </tr>
                                    <tr>
                                        <th>Birthday</th>
                                        <td>28-06-1997</td>
                                    </tr>
                                    <tr>
                                        <th>Mobile No</th>
                                        <td>9381823674</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>Sikanth@gmail.com</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                    <div className="col-lg-6 p-5">
                        <h4>SKILLS</h4>
                        <p className="text-left">HTML & CSS3</p>
                        <div className="progress" style={h}>
                            <div className="progress-bar bg-success" style={{width:'95%'}}>95%</div>
                        </div>
                        <p className="text-left">Bootstrap</p>
                        <div className="progress" style={h}>
                            <div className="progress-bar bg-success" style={{width:'90%'}}>90%</div>
                        </div>
                        <p className="text-left">JAVASCRIPT & JQUERY</p>
                        <div className="progress" style={h}>
                            <div className="progress-bar bg-success" style={{width:'85%'}}>85%</div>
                        </div>
                        <p className="text-left">Angular</p>
                        <div className="progress" style={h}>
                            <div className="progress-bar bg-success" style={{width:'78%'}}>78%</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
       </div>
        </>)
}

export default About;
