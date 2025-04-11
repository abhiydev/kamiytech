import mongoose from "mongoose";

const dbConnect = async () => {
    const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/";
    try {
        await mongoose.connect(uri);
        console.log("Database connected successfully: " + uri);
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

export default dbConnect;