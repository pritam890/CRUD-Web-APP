import { Link, useNavigate } from "react-router-dom";
import "./Add.css"
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
function AddUser(){
    const users = {
        fname:"",
        lname:"",
        email:"",
        password:""
    }
    const [user,setUser] = useState(users);
    const navigate = useNavigate();
    const inputHandler=(e)=>{
        const {name,value} = e.target;

        setUser({...user, [name]:value});
        
    }
    const submitForm = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create",user)
        .then((response)=>{
            toast.success(response.data.msg,{position:"top-right"})
            navigate("/");
        }).catch(error => console.log(error))
    }
    return(
        <div className="addUser">
            <Link to="/">Back</Link>
            <h3>Add New User</h3>
            <form className="addUserform" onSubmit={submitForm}>
                <div className="input-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" onChange={inputHandler} id="fname" name="fname" autoComplete="off" placeholder="First name" />
                </div>
                <div className="input-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" onChange={inputHandler} id="lname" name="lname" autoComplete="off" placeholder="Last name" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={inputHandler} id="email" name="email" autoComplete="off" placeholder="Email" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" onChange={inputHandler} id="password" name="password" autoComplete="off" placeholder="Password" />
                </div>
                <div className="input-group">
                    <button type="submit">ADD USER</button>
                </div>
            </form>
        </div>
    )
}
export default AddUser;