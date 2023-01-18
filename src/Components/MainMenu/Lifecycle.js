import React, {component} from "react";

class Lifecycle extends  React.Component {
    //constructor_is_mounting_method
    constructor(props){
        super(props);
        this.state={}
        console.log(`constructor_is_mounting_method`)
    }
    componentWillMount()
    {
        console.log(`componentWillMount_is_mounting_method`)
    }
    
    render(){
        console.log(`render_is_mounting_method`)
        return(<>
        <div className="p-5 text-center">
            <h2>React class Component Life cycle process</h2>
        </div>
        </>)
    }

componentDidMount()
{
    console.log(`componentDidMount_is_mounting_method`)
}
    

}

export default Lifecycle;