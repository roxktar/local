const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
    required: true
  },

  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true
  },

  requirement: {
    type: String
  },

  address: {
    type: String,
    required: true
  },

  bookingDate: {
    type: Date,
    required: true
  },

  price: {
    type: Number,
    required: true,
    min: 0
  },

  status: {
    type: String,
    enum: [
      "pending",
      "accepted",
      "rejected",
      "completed",
      "cancelled"
    ],
    default: "pending"
  }
});

module.exports = mongoose.model("Booking", bookingSchema);