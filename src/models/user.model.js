const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  phone: {
    type: String
  },

  role: {
    type: String,
    enum: ["customer", "provider", "admin"],
    default: "customer"
  },

  location: {
    city: String,
    address: String
  }
});

module.exports = mongoose.model("User", userSchema);