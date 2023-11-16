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

// health api
app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "All Good🏆",
    });
});

// POST / Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.json({
            success: false,
            message: 'please provide email and password'
        })
    }
    const user = await User.findOne({
        email: email,
        password: password
    })

    if (user) {
        return res.json({
            success: true,
            data: user,
            message: "Login successful"
        });
    }
    else {
        return res.json({
            success: false,
            message: "Invalid credentials"
        })
    }
})

// POST /signup
app.post("/signup", async (req, res) => {
    const {
        name,
        email,
        password,
        mobile,
        address,
        gender,
        roll
    } = req.body;

    const user = new User({
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        address: address,
        gender: gender,
        roll: roll
    });

    try {
        const savedUser = await user.save();

        res.json({
            success: true,
            data: savedUser,
            message: "Signup Successfully"
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`The server is Running on Port ${PORT} 🚀`);
});