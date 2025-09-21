import mongoose from "mongoose";
import dotevn from "dotenv";
dotevn.config();

const connectDB = async () => {
    try {
        let connection = await mongoose.connect(process.env.MONGO_URL);

        if (connection) {
            console.log("Connected to the DB mongo.")
        }

    } catch (error) {
        console.log("Failed to connect to the DB");
        console.log("Error: ", error)
    }
}


export default connectDB;