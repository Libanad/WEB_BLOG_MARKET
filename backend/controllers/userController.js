// const userModel = require("../models/userModel")
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// // Registering the user
// const createUser = async (req, res) => {
//   // Check the incoming data
//   console.log(req.body);
 
//   //   Destructuring the incoming data
//   const { fName,lName, email,  password } = req.body;
 
//   //   Validate the incoming data
//   if (!fName || lName || !email || !password) {
//     return res
//       .status(400)
//       .json({ success: false, message: "All fields are required!" });
//   }
 
//   try {
//     const existingUser = await userModel.findOne({ email: email });
//     if (existingUser) {
//       return res
//         .status(400)
//         .json({ success: false, message: "User Already Exists!" });
//     }
 
//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
 
//     const newUser = new userModel({
//       fname: fName,
//       lname: lName,
//       email: email,
//       password: hashedPassword,
//     });
 
//     await newUser.save();
 
//     res.status(201).json({ success: true, message: "User Created!" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: "Internal Server Error!" });
//   }
// };
 
// // Logging in the user
// const loginUser = async (req, res) => {
//   console.log(req.body);
 
//   const { email, password } = req.body;
 
//   if (!email || !password) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Please enter all fields!" });
//   }
 
//   try {
//     const user = await userModel.findOne({ email: email });
//     if (!user) {
//       return res
//         .status(400)
//         .json({ success: false, message: "User doesn't exist" });
//     }
 
//     const passwordCorrect = await bcrypt.compare(password, user.password);
//     if (!passwordCorrect) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Password is incorrect" });
//     }
 
//     const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);
 
//     res.status(201).json({
//       sucess: true,
//       message: "Logged in Successfully!",
//       token: token,
//       user: user,
//     });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server error",
//       error: err,
//     });
//   }
// };
 
// module.exports = {
//   createUser,
//   loginUser,
// };

const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Registering the user
const createUser = async (req, res) => {
  console.log(req.body);

  // Destructuring the incoming data
  const { username, email, password } = req.body;

  // Validate the incoming data
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required!" });
  }

  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exists!" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      username: username,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ success: true, message: "User Created!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error!" });
  }
};

// Logging in the user
const loginUser = async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter all fields!" });
  }

  try {
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User doesn't exist" });
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);
    if (!passwordCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Password is incorrect" });
    }

    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(201).json({
      success: true,
      message: "Logged in Successfully!",
      token: token,
      user: user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
      error: err,
    });
  }
};


module.exports = {
  createUser,
  loginUser,
};
