import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express()
app.use(express.json());

async function connectMongoDB() {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    if (conn) {
        console.log("Connected to MongoDB📦");
    }
}
connectMongoDB();


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`The server is Running on Port ${PORT} 🚀`);
});