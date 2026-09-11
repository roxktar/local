const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true
  },

  businessName: {
    type: String,
    required: true
  },

  services: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service"
    }
  ],

  location: {
    address: String,
    city: String
  },

  price: {
    type: Number,
    default: 0
  },

  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },

  experience: {
    type: Number,
    default: 0
  },

  availability: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Provider", providerSchema);