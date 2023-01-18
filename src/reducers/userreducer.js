export default function userReducer(state=[],action){
    //yes or no ->conditional statements
    switch(action.type){
        case'UserAction':
        return action.payload;break;
        default:
            return state
    }
}