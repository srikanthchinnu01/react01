export default function StudentsReducer(state=[],action){
    //yes or no ->conditional statements
    switch(action.type){
        case 'StudentsAction':
        return action.payload;break;
        default:
            return state
    }
}