const User = require("../models/User");

// 🧾 Get all users (Directory - public)
exports.listUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // exclude password
    res.json(users);
  } catch (err) {
    res.status(500).json(" error", err);
  }
};

// 🔍 Get a specific user profile (public/visitor/owner)
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user profile" });
  }
};

// ✏️ Update owner profile (owner only)
exports.updateUser = async (req, res) => {
  try {
    const ownerId = req.user._id.toString();
    const targetId = req.params.id;

    if (ownerId !== targetId) {
      return res
        .status(403)
        .json({ message: "Cannot edit another user's profile" });
    }

    const updates = {
      title: req.body.title,
      yearsOfExperience: req.body.yearsOfExperience,
      profilePictureUrl: req.body.profilePictureUrl,
      socialLinks: req.body.socialLinks,
    };

    const updatedUser = await User.findByIdAndUpdate(targetId, updates, {
      new: true,
      runValidators: true,
      select: "-password",
    });

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Error updating profile" });
  }
};
