// const express=require('express')
// const router=express.Router()
// const User=require('../models/userModel')
// const bcrypt = require('bcrypt')
// const jwt=require('jsonwebtoken')

// // Register
// router.post("/register",async(req,res)=>{
//     try{
//         const{username,email,password}=req.body
//         const salt=await bcrypt.genSalt(10)
//         const hashedPassword=await bcrypt.hashSync(password,salt)
//         const newUser=new User({username,email,password:hashedPassword})
//         const savedUser=await newUser.save()
//         res.status(200).json(savedUser)

//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// })



// // Login
// router.post("/login", async (req, res) => {
//     try {
//         const user = await User.findOne({ email: req.body.email });
//         if (!user) {
//             return res.status(404).json("User not found");
//         }
//         const match = await bcrypt.compare(req.body.password, user.password);
//         if (!match) {
//             return res.status(401).json("Wrong credentials!");
//         }
//         const token = jwt.sign({_id: user._id,username:user.username,email:user.email }, process.env.SECRET, { expiresIn: "3d" });
//         const { password, ...info } = user._doc
//         res.cookie("token", token).status(200).json(info);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });



// // Logout
// router.get("/logout",async(req,res)=>{
// try{
//     res.clearCookie("token",{sameSite:"none",secure:true}).status(200).send("User logged out successfully!")

// }
// catch(err){
//     res.status(500).json(err)
// }

// })
// // Refetching users
// router.get("/refetch", (req,res)=>{
//     const token=req.cookies.token
//     jwt.verify(token,process.env.SECRET,{},async(err,data)=>{
//         if(err){
//             return res.status(404).json(err)
//         }
//         res.status(200).json(data)
//     })
// })


// module.exports=router

const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate incoming data
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required!" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User Already Exists!" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({ username, email, password: hashedPassword });
        const savedUser = await newUser.save();

        res.status(201).json({ success: true, message: "User Created!", user: savedUser });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal Server Error!" });
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Please enter all fields!" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json("User not found");
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json("Wrong credentials!");
        }

        const token = jwt.sign({ _id: user._id, username: user.username, email: user.email }, process.env.SECRET, { expiresIn: "3d" });
        const { password: userPassword, ...info } = user._doc;

        res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "none" }).status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Logout
router.get("/logout", (req, res) => {
    try {
        res.clearCookie("token", { sameSite: "none", secure: true }).status(200).send("User logged out successfully!")
    } catch (err) {
        res.status(500).json(err);
    }
});

// Refetching users
router.get("/refetch", (req, res) => {
    const token = req.cookies.token;
    jwt.verify(token, process.env.SECRET, {}, (err, data) => {
        if (err) {
            return res.status(404).json(err);
        }
        res.status(200).json(data);
    });
});

module.exports = router;
