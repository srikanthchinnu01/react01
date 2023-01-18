//index.js->root module for entire project
import ReactDOM from 'react-dom'
import React from 'react'



//import Bootstrap into react
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

//import Routings.js
import Routings from './Components/Routing.js'

import {Provider} from "react-redux";
import store from "./store"


ReactDOM.render(<Provider store={store}>
    <Routings />
</Provider>, document.getElementById('root'))