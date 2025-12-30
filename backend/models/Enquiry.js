const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema(
  {
    name: String,
    company: String,
    gender: String,
    age: Number,
    email: String,
    contactNumber: String,
    query: String,
    disposition: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enquiry", EnquirySchema);
