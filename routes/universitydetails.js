const express = require("express");
const router = express.Router();
const Universitydetails = require("../models/Universitydetails");

// ➤ Add new university
router.post("/add", async (req, res) => {
  try {
    const newUniversity = new Universitydetails(req.body);
    await newUniversity.save();
    res.status(201).json({ success: true, message: "University added successfully", data: newUniversity });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ➤ Get all universities
router.get("/", async (req, res) => {
  try {
    const universities = await Universitydetails.find();
    res.json({ success: true, data: universities });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ➤ Get single university by ID (when clicked on university card)
router.get("/:id", async (req, res) => {
  try {
    const university = await Universitydetails.findById(req.params.id);
    if (!university) return res.status(404).json({ success: false, message: "University not found" });

    res.json({ success: true, data: university });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
