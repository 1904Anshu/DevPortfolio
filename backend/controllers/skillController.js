const Skill = require("../models/Skill");

// ➕ Add Skill (Accessible to owners only)
exports.addSkill = async (req, res) => {
  try {
    const newSkill = new Skill({
      userId: req.user._id,
      name: req.body.name,
      category: req.body.category,
      proficiencyLevel: req.body.proficiencyLevel,
      yearsExperience: req.body.yearsExperience,
      description: req.body.description,
      projectUrl: req.body.projectUrl,
    });

    const savedSkill = await newSkill.save();
    res.status(201).json(savedSkill);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to add skill", error: error.message });
  }
};

// 👍 Endorse Skill (Once per user per skill - for visitor and owner roles)
exports.endorseSkill = async (req, res) => {
  try {
    const skillId = req.params.id;
    const skill = await Skill.findById(skillId);

    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    const alreadyEndorsed = skill.endorsements.some(
      (endorsement) => endorsement.userId.toString() === req.user._id.toString()
    );

    if (alreadyEndorsed) {
      return res
        .status(400)
        .json({ message: "You have already endorsed this skill" });
    }

    skill.endorsements.push({ userId: req.user._id });
    await skill.save();

    res.status(200).json({
      message: "Endorsed successfully",
      endorsementCount: skill.endorsements.length,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error endorsing skill", error: error.message });
  }
};

// 🔍 Get a Specific Skill (Public access)
exports.getSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id).populate(
      "userId",
      "name title"
    );

    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    res.status(200).json(skill);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving skill", error: error.message });
  }
};

// 📋 Get All Skills by a Specific User
// exports.getSkillsByUser = async (req, res) => {
//   try {
//     const skills = await Skill.find({ userId: req.params.id });
//     res.status(200).json(skills);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error retrieving user skills", error: error.message });
//   }
// };

exports.getSkillsByUser = async (req, res) => {
  try {
    const skills = await Skill.find({ userId: req.params.id });

    const skillsWithCounts = skills.map((skill) => ({
      _id: skill._id,
      name: skill.name,
      category: skill.category,
      proficiencyLevel: skill.proficiencyLevel,
      yearsExperience: skill.yearsExperience,
      description: skill.description,
      projectUrl: skill.projectUrl,
      endorsementCount: skill.endorsements.length,
      createdAt: skill.createdAt,
    }));

    res.status(200).json(skillsWithCounts);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving user skills",
      error: error.message,
    });
  }
};

// ❌ Delete a Skill (Owner only)
// exports.deleteSkill = async (req, res) => {
//   try {
//     const skill = await Skill.findById(req.params.id);

//     if (!skill) {
//       return res.status(404).json({ message: "Skill not found" });
//     }

//     if (skill.userId.toString() !== req.user._id.toString()) {
//       return res
//         .status(403)
//         .json({ message: "You are not authorized to delete this skill" });
//     }

//     await skill.remove();
//     res.status(200).json({ message: "Skill deleted successfully" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error deleting skill", error: error.message });
//   }
// };

exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    if (skill.userId.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete this skill" });
    }

    await Skill.findByIdAndDelete(req.params.id); // ✅ Correct way

    res.status(200).json({ message: "Skill deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting skill", error: error.message });
  }
};

// 🌍 Get All Skills (Public access)
exports.getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find().populate("userId", "name title");
    res.status(200).json(skills);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving all skills", error: error.message });
  }
};

// 📊 Get average endorsement count for each skill name (platform-wide)
exports.getSkillPopularity = async (req, res) => {
  try {
    const avgEndorsements = await Skill.aggregate([
      {
        $group: {
          _id: "$name",
          averageEndorsements: { $avg: { $size: "$endorsements" } },
          totalSkills: { $sum: 1 },
        },
      },
      {
        $project: {
          skill: "$_id",
          averageEndorsements: { $round: ["$averageEndorsements", 2] },
          totalSkills: 1,
          _id: 0,
        },
      },
      { $sort: { averageEndorsements: -1 } },
    ]);

    res.status(200).json(avgEndorsements);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch skill popularity",
      error: error.message,
    });
  }
};

// 🔍 Search Skills (Public access)
exports.searchSkills = async (req, res) => {
  try {
    const { search } = req.query; // Get the search query parameter

    if (!search) {
      return res.status(400).json({ message: "Search term is required" });
    }

    // Define the search filter
    const searchFilter = {
      $or: [
        { name: { $regex: search, $options: "i" } }, // Match skill name
        { category: { $regex: search, $options: "i" } }, // Match skill category
      ],
    };

    // Fetch skills based on search filter
    const skills = await Skill.find(searchFilter).populate(
      "userId",
      "name title"
    );

    if (skills.length === 0) {
      return res.status(404).json({ message: "No skills found" });
    }

    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({
      message: "Error searching skills",
      error: error.message,
    });
  }
};
