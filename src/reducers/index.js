import { combineReducers } from "redux";
 
import empReducer from './Empreducer'
import StudentReducer from './Studentreducer'
import UserReducer from './userreducer'

var rootReducer =combineReducers({
    empReducer,UserReducer,StudentReducer
});

export default rootReducer;
