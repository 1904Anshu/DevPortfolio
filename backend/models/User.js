const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  title: String,
  yearsOfExperience: Number,
  profilePictureUrl: String,
  socialLinks: {
    github: String,
    linkedin: String,
  },
  role: {
    type: String,
    enum: ["owner", "visitor"],
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
