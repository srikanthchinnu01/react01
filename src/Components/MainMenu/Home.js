//Home.js ->Module

import React, {Fragment} from "react"

//profile_photo
import profile from './../../Assets/images/chinnu.jpg'

//Background-image
import backgrounds from './../../Assets/images/background.jfif'
//internal styles
var styles={
    backgroundImage:`URL(${backgrounds})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
}


//Create Home Component
function Home() {
    //variable
    
    
    return(<>
        <div className=" text-white p-5" style={styles} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="h1 pt-5 mt-5">I am Srikanth.Gajjela </h1>
                        <h5 className="bg-success p-2 mt-3 w-75 text-center">FullStack</h5>
                    </div>
                    <div className="col-lg-6">
                        <img src={profile} className="w-75 mx-auto img-thumbnail"/>
                    </div>
                </div>
            </div>
        </div>



        </>)
}

export default Home;
