import { createStore,applyMiddleware} from "redux";

import rootReducer from './../reducers/index'

import promisemiddleware from "redux-promise";

var Store=createStore(rootReducer,applyMiddleware(promisemiddleware));
//Createstore(reducer,middleware)


export default Store;
