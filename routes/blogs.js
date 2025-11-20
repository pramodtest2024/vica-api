const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/checkToken");
const Blogs = require("../models/Blogs");

// Require token for all blog APIs
router.use(checkToken);

// GET all blogs
router.get("/", async (req, res) => {
  try {
    const data = await Blogs.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// GET one blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);
    if (!blog)
      return res.status(404).json({ success: false, message: "Blog not found" });

    return res.status(200).json({ success: true, data: blog });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// CREATE a blog
router.post("/", async (req, res) => {
  try {
    const blog = await Blogs.create(req.body);
    return res.status(201).json({ success: true, message: "Blog created", data: blog });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// UPDATE a blog
router.put("/:id", async (req, res) => {
  try {
    const blog = await Blogs.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blog)
      return res.status(404).json({ success: false, message: "Blog not found" });

    return res.status(200).json({ success: true, message: "Blog updated", data: blog });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE a blog
router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blogs.findByIdAndDelete(req.params.id);
    if (!blog)
      return res.status(404).json({ success: false, message: "Blog not found" });

    return res.status(200).json({ success: true, message: "Blog deleted" });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
