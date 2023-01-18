import axios from "axios";
const url="http://localhost:3001/users"
export default function Studentsaction(){
    return({
        type:'StudentsAction',
        payload:axios.get(url).then((result)=>result.data)
    })
}
