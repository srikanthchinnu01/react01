export default function empReducer(state=[],action){
    //yes or no ->conditional statements
    switch(action.type){
        case'EmpAction':
        return action.payload;break;
        default:
            return state
    }
}