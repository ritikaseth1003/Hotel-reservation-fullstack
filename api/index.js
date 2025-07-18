import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import createError from 'http-errors';
import cookieParser from "cookie-parser";
import cors from "cors"



import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js";

const app=express()


dotenv.config()

const connect=async ()=>{
    try{
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to  mongodb!");
    }
    catch(error){
    throw error;
}
};
mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected");
})

//middlewares.
app.use(cors());
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)
app.use("/api/users",usersRoute)

//Error handling middlware.


app.use((err, req, res, next) => {
    // Handle errors and send a detailed response
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong.";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {} // Show stack only in development
    });
});


app.listen(8800,()=>{
    connect();
    console.log("Connected to backend!")
})
