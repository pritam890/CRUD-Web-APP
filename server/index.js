import express from "express"
import mongoose  from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import route from "./routes/userRoute.js"

const app=express();
app.use(bodyParser.json());
app.use(cors(
    {
        origin: ["https://deploy-mern-1whq.vercel.app"],
        methods: ["POST","GET","PUT","DELETE"],
        credentials: true
    }
));
dotenv.config();

const PORT = 8000;
const URL = "mongodb+srv://pritamadhikari0001:Pritam@cluster0.tmylbjd.mongodb.net/crudApp?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(URL).then(()=>{
    
    console.log("DB connected succesfully");
    
    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`);
    })
    
}).catch(error => console.log(error));

app.use("/api",route);
