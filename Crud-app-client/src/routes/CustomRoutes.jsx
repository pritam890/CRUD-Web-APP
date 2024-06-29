import { Routes,Route } from "react-router-dom";
import User from "../components/getuser/User";
import AddUser from "../components/adduser/Add";
import Update from "../components/updateuser/Update";

function CustomRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<User/>}/>
                <Route path="/add" element={<AddUser/>}/>
                <Route path="/edit/:id" element={<Update/>}/>
            </Routes>
        </div>
    )
}
export default CustomRoutes;