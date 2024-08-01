import { useEffect, useState } from "react";
import "./User.css"
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
function User(){
    const [users,setUsers] = useState([]);
    axios.defaults.withCredentials = true;
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await axios.get("https://crud-web-api.vercel.app/api/getAll")
            setUsers(response.data)
        }
        fetchData();
    },[])
    const deleteUser= async(userId)=>{
        await axios.delete(`https://crud-web-api.vercel.app/api/deleteUser/${userId}`)
        .then((response)=>{
            setUsers((prevUser)=>prevUser.filter((user)=>user._id !==userId))
            toast.success(response.data.msg, {position: 'top-right'})
        }).catch(err => console.log(err))
    }
    return(
        <div className="Usertable">
            <Link to={"/add"}><button className="addButton">Add User</button></Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>{
                            return(
                                <tr key={user._id}>
                                    <td>{index+1}</td>
                                    <td>{user.fname} {user.lname}</td>
                                    <td>{user.email}</td>
                                    <td className="actionButton">
                                        <button onClick={()=> deleteUser(user._id)}><i className="fa-solid fa-trash"></i></button>
                                        <Link to={`/edit/`+user._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                    </td>
                    </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    )
}
export default User;
