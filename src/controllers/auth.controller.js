const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

async function registerUser(req, res) {
  const { name, email, password, phone, role, location } = req.body;

 
    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [{ email }, { phone }]
     });
   
     // check if user exist or not
     if(existingUser) {
      return res.status(400).json({ message: "User already exists" });

     }

     //password hashing

     const hashedPassword = await bcrypt.hash(password, 10);

     // agar user exist nahi karta hai to create new user

     const user= new User({
      name,
      email,
      password: hashedPassword,
      phone,
      role,
      location
     });

     // ab token generate karenge

     const token=jwt.sign({ id: user._id ,role : user.role }, process.env.JWT_SECRET);

     res.cookie("token",token);
     res.status(201).json({ message: "User registered successfully", 
         user: { id: user._id, name: user.name, email: user.email, role: user.role }});


  } 




async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ 
    $or: [{ email }, { phone: email }]  
    });

    if(!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password in the database

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);

    res.cookie("token", token);
    res.status(200).json({ message: "Login successful",
     user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  }


  module.exports = { registerUser, loginUser };

    
    