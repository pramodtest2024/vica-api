const express = require("express");
const router = express.Router();
const Universitysearch = require("../models/Universitysearch");

// Search University API
router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ status: false, message: "Search query missing" });
    }

    // Search by name, country, city, program
    const universities = await Universitysearch.find({
      $or: [
        { name: { $regex: query, $options: "i" }},
        { country: { $regex: query, $options: "i" }},
        { city: { $regex: query, $options: "i" }},
        { programs: { $regex: query, $options: "i" }}
      ]
    });

    res.status(200).json({
      status: true,
      total: universities.length,
      data: universities
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
});

module.exports = router;
