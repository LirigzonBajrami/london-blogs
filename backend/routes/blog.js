const express = require("express");
const router = express.Router();
const {
  getBlogs,
  createBlog,
  getBlog,
  deleteBlog,
} = require("../controllers/blogController");

// GET blogs
router.get("/", getBlogs);

// GET single blog
router.get("/:id", getBlog);

// Create blog
router.post("/", createBlog);

// Update blog

// Delete blog
router.delete("/:id", deleteBlog);

module.exports = router;
