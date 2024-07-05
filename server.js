
const express =require ('express')
const morgan=require('morgan')
const cors=require('cors')
const dotenv=require('dotenv')
const colors=require('colors')
const connectDb = require("./config/connectDb");


//config dotenv
dotenv.config();

// database call
connectDb();


// rest object
const app=express();

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.get('/',(req,res)=>{
    res.send("<h1>hello from server</h1>")
})

//port
const PORT=8080 || process.env.PORT

//listen
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
