//Contact.js ->Module

import React,{ Component } from "react"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import EmpAction from './../../actions/EmpAction.js'


//Create Contact Component
class Contact extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){
        this.props.EmpAction();
    }
    render(){
    return(<>
        <h1 className="text-center text-primary">Contact component</h1>
        <p className="para" > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            
        </p>
        <br /> <br />
        {
            this.props.empinfo.map((result,i)=>{
                return(<ul key={i}>
                    <li>{result.id}</li>
                    <li>{result.name}</li>
                    <li>{result.email}</li>

                </ul>)
            })
        }
        </>)
}
}
function  mapStatetoprops(state){
    return({
        empinfo:state.empReducer
    })

}
function mapDispatchToProps(dispatch){
    return bindActionCreators({EmpAction},dispatch)

}
export default connect(mapStatetoprops,mapDispatchToProps) (Contact);
