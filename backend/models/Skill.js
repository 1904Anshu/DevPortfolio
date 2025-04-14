const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  category: String,
  proficiencyLevel: Number, // 1-5
  yearsExperience: Number,
  description: String,
  projectUrl: String,
  endorsements: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      timestamp: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Skill", skillSchema);
