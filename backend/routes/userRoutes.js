const router = require("express").Router();

// Middleware for protecting routes and restricting access based on roles
const { protect } = require("../middlewares/authMiddlware");
const { restrictTo } = require("../middlewares/roleMiddleware");

// Controller functions for user management
const {
  getUser,
  updateUser,
  listUsers,
} = require("../controllers/userContoller");

/**
 * User Management Routes
 */

// 🔍 Get a list of all users (public access)
router.get("/", listUsers);

// 🔍 Get details of a specific user (public access)
router.get("/:id", getUser);

// 📝 Update user information (only for owner role)
router.put("/:id", protect, restrictTo("owner"), updateUser);

module.exports = router;
