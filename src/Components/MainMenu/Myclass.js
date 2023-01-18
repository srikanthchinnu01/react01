import React,{setState} from "react";
//global variable
var mobileno=9381823613
class Myclass extends React.Component
{

    
    //constructor
    constructor(props)
    {
        super(props)
        //step1-state object initialization
        this.state=
        {
            email:'srikanth@gmail.com',
            phone: 9381823674
          }
    }
    statechanges=()=>{
       this.setState ({
        email:'srikanth.chinnu@gmail.com',
        phone :9381833613

       })
    }
    //prepare the component -input
    render(){
        var name='srikanth'
        return(<>
        <div className="container p-5">
        <h1>React Class Component & stateObject & Events</h1>
        {/** step2 access state object properties from jsx */}
        <p>Email is:{this.state.email}</p>
        {/**step:3 Change state object data by this.setstate */}
        <button onClick= {() => this.setState({ email :'Chinnu@gmail.com'})}>Change My Email</button>
        <br /><br />

        <p>Email is:{this.state.phone}</p>
        <button onClick= {() => this.setState({ phone :'7660912331'})}>Change My phone number</button>
        <br /><br />

        <button onClick={()=>{this.statechanges()}}>Update All state properties</button>
       
        </div>
        </>);
    }

}
export default Myclass;








