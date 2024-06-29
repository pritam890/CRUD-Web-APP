import { Link, useNavigate, useParams } from "react-router-dom";
import "./Update.css"
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
function Update(){
    const users = {
        fname : "",
        lname : "",
        email : ""
    }
    const {id}=useParams();
    const navigate=useNavigate();
    const [user,setUser] = useState(users);
    const inputChangeHandler = (e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value});
    }
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getById/${id}`)
        .then((response)=>{
            setUser(response.data);
        }).catch(err=>console.log(err))
    },[id])
    const submitForm= async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/${id}`,user)
        .then((response)=>{
            toast.success(response.data.msg,{position:"top-right"})
            navigate("/");
        }).catch(error => console.log(error))
    }
    return(
        <div className="addUser" onSubmit={submitForm}>
            <Link to="/">Back</Link>
            <h3>Update New User</h3>
            <form className="addUserform">
                <div className="input-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" value={user.fname} onChange={inputChangeHandler} id="fname" name="fname" autoComplete="off" placeholder="First name" />
                </div>
                <div className="input-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text"  value={user.lname} onChange={inputChangeHandler} name="lname" id="lname" autoComplete="off" placeholder="Last name" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="text"  value={user.email} onChange={inputChangeHandler} id="email" name="email" autoComplete="off" placeholder="Email" />
                </div>
                <div className="input-group">
                    <button type="submit">ADD USER</button>
                </div>
            </form>
        </div>
    )
}
export default Update;