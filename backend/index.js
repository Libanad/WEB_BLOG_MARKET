const express=require('express')
const mongoose=require('mongoose')
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const postRoute=require('./routes/posts')
const commentsRoute=require('./routes/comments')
const cookieParser = require('cookie-parser')


// database connection
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database is connected successfully")
    }
    catch(err){
        console.log(err)
    }

}
// middlewares
dotenv.config()
app.use(express.json())
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",commentsRoute)


app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("app is running on port",+process.env.PORT)
})