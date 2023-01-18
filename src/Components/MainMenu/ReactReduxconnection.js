import {React,Component} from 'react'
//step-1
import {connect} from 'react-redux'

//step-3
import EmpAction from './../../actions/EmpAction.js'
import UserAction from './../../actions/userAction.js'
import StudentsAction from './../../actions/StudentsAction'
//step-4
import { bindActionCreators } from 'redux'

class ReactReduxconnection extends Component{

    constructor(props)
    {
        super(props)
        this.state={}
    }
    componentDidMount(){
        this.props.EmpAction();
        this.props.UserAction();
        this.props.StudentsAction();
    }
    render(){
        return(<>
        <div className='container py-2'>
        <h2 className='text-center'>react redux connection example</h2>
        <h3>synchronus data frpm api</h3>
        {
            this.props.empdata.map((res,i)=>
            {
                return(<ul key={i}>
                    <li>{res.id}</li>
                    <li>{res.name}</li>
                    <li>{res.email}</li>

                </ul>)
            })
        }
         <h3>Asynchronus data[Global rest api] frpm redux actions</h3>
         {
            this.props.userdata.map((res,i)=>
            {
                return(<ul key={i}>
                    <li>{res.id}</li>
                    <li>{res.name}</li>
                    <li>{res.email}</li>

                </ul>)
            })
        }
         <h3>Asynchronus data[Local rest api] frpm redux actions</h3>
         {
            this.props.studentdata.map((res,i)=>
            {
                return(<ul key={i}>
                    <li>{res.id}</li>
                    <li>{res.name}</li>
                    <li>{res.email}</li>
                    <li>{res.phone}</li>

                </ul>)
            })
        }
        </div>
        </>)
    }
}
//step-6
const mapStateToProps=(state)=>{
    //get the data from redux store by using store
   console.log(state) 
return({empdata:state.empReducer,
       userdata:state.UserReducer,
       studentdata:state.StudentReducer
})


}
//step-5
const mapDispatchProps=(dispatch)=>{
    //calling redux actions
    return bindActionCreators({EmpAction, UserAction,StudentsAction},dispatch)
    
}

//export default ReactReduxconnection; Normal react component export
//step-2
export default connect(mapStateToProps,mapDispatchProps)(ReactReduxconnection)