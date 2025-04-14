const express = require("express");
const router = express.Router();

// Middleware for protecting routes and restricting access based on roles
const { protect } = require("../middlewares/authMiddlware");
const { restrictTo } = require("../middlewares/roleMiddleware");

// Controller functions for skills management
const {
  addSkill,
  endorseSkill,
  getSkill,
  deleteSkill,
  getSkillsByUser,
  getAllSkills,
  getSkillPopularity,
  searchSkills,
} = require("../controllers/skillController");

/**
 * Skill Management Routes
 */

// ➕ Add a new skill (only for owner role)
router.post("/", protect, restrictTo("owner"), addSkill);

// 👍 Endorse a skill (accessible to visitor and owner roles)
router.post(
  "/:id/endorse",
  protect,
  restrictTo("visitor", "owner"),
  endorseSkill
);

// 🔍 Search for skills (accessible only to visitors)
router.get("/search", protect, restrictTo("visitor"), searchSkills);

// 🌍 Get all skills (public or protected depending on your use case)
router.get("/", getAllSkills);

// 📋 Get all skills for a specific user (user-specific)
router.get("/user/:id", getSkillsByUser);

// 🔍 Get a specific skill by ID (public access)
router.get("/:id", getSkill);

// ❌ Delete a skill (only for the owner role)
router.delete("/:id", protect, restrictTo("owner"), deleteSkill);

// 📊 Skill popularity analytics (only for owner role)
router.get(
  "/analytics/popularity",
  protect,
  restrictTo("owner"),
  getSkillPopularity
);

module.exports = router;
