import mongoose from "mongoose";
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connect to DB");
    } catch (error) {
        console.log("Database connesction error",error.message);
    }
}
export default connectDB;