const mongoose = require("mongoose");
const Blog = require("../Models/blogModel");

// GET blogs function
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET single blog
const getBlog = async (req, res) => {
  const { id } = req.params;

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blogs" });
  }

  try {
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: "We couldn't find this blog!" });
  }
};

// CREATE blog function
const createBlog = async (req, res) => {
  const newBlog = new Blog(req.body);

  try {
    const savedBlog = await newBlog.save();

    res.status(200).json(savedBlog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete blog function
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blogs" });
  }

  try {
    const blog = await Blog.findOneAndDelete({ _id: id });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createBlog, getBlogs, getBlog, deleteBlog };
