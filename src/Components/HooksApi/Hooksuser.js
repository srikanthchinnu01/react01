import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

//Global variable
const url = `  http://localhost:3001/users`



export default () => {

    let [userData, setStateuserData] = useState([]);

    let getData = () => {
        axios.get(url).then((result) => setStateuserData(result.data))
    }

    useEffect(() => { getData() }, []);


//Delete the Data
  let  DeleteHandler = (id) => {

        if (window.confirm(`Delete the Record Number is ${id}?`)) {
            axios.delete(`${url}/${id}`);
            getData()
        }
    }


    return (
        <>
            <div className="container p-5">
                <h3 className="text-center">FETCH RESRAPI DATA USING LOCAL URL/CLIENT</h3>
                <table className="table table-dark table-bordered my-5">
                    <thead className="table table-info">
                        <tr>
                            <th>SNO</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>Phone</th>
                            <th colSpan="3" className="text-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((res, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{res.name}</td>
                                        <td>{res.email}</td>
                                        <td>{res.phone}</td>
                                        <td>
                                            <Link to={`/hooksuser/view/${res.id}`} className="btn btn-primary ">View</Link>
                                        </td>
                                        <td>
                                            <Link to={`/hooksuser/edit/${res.id}`} className="btn btn-warning">Edit</Link>
                                        </td>
                                        <td>
                                            <button onClick={()=>DeleteHandler(res.id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>

            </div>
        </>);
}