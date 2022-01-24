const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  city: {
    type: String,
    default: "",
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
  photo: {
    type: String,
  },
  availability: {
    type: [String],
    default: [],
  },
  booking_date: {
    type: [Date],
    default: [],
  },
  rank: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
});

module.exports = Profile = mongoose.model("profile", profileSchema);
