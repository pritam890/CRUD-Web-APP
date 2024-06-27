import express from "express"
import {create, deleteUser, getAll, getById, update} from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAll",getAll);
route.get("/getById/:id",getById);
route.put("/update/:id",update)
route.delete("/deleteUser/:id",deleteUser);
export default route;