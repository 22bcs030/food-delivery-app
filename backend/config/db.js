import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://amityadav841703:s8lRCW4Mkd9bZMQz@location-track.1jziuz4.mongodb.net/?retryWrites=true&w=majority&appName=location-track').then(()=>{
       console.log('DB connected') ;
    })
}