import React,{useEffect, useState} from 'react';
import axios from "axios";
function App(props) {

    const [users, setUsers]=useState([]);

    useEffect(()=>{
        axios.get('https://apifortest.herokuapp.com/api/user/').then((response)=>{
            setUsers(response.data);
            console.log(response.data)
        }).catch((status)=>{
            console.log(status)
        })
    },[users]);

    function deleteUsers(id) {
        axios.delete('https://apifortest.herokuapp.com/api/user/'+id)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        users.map((item, index)=>{
                            return <div className="col-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>First Name: {item.first_name}</h3>
                                        <h3>Last Name: {item.last_name}</h3>
                                    </div>
                                    <div className="card-body">
                                        <img className='img-fluid' src={item.image} alt=""/>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-warning w-50">Edit</button>
                                        <button onClick={()=>deleteUsers(item.id)} className="btn btn-danger w-50">Delete</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default App;