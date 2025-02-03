// backend/models/Business.js
const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    city: {
      type:String,
      required: true,
    },
    owner: {
      type:String,
      required: true,
    },
    phone: {
      type:Number,
      required: true,
    },
    email: {
      type:String,
      required: true,
    },
    address: {
      type:String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Business", businessSchema);
