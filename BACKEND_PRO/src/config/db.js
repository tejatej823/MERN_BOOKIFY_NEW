const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config()

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Mongoose connected to mongodb");
    }
    catch(error){
        console.log("MongoDB connection error:", error.message);
        process.exit(1);
    }
}

module.exports=connectDB;