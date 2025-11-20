const express = require('express');
const router = express.Router();
const checkToken = require('../middlewares/checkToken');
const Services = require('../models/Services');

// Require token for all routes
router.use(checkToken);

// GET all
router.get('/', async (req, res) => {
    try {
        const data = await Services.find();
        return res.status(200).json({ success: true, data });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
});

// GET one by ID
router.get('/:id', async (req, res) => {
    try {
        const item = await Services.findById(req.params.id);
        if (!item) return res.status(404).json({ success: false, message: "Not found" });
        return res.status(200).json({ success: true, data: item });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
});

// CREATE
router.post('/', async (req, res) => {
    try {
        const item = await Services.create(req.body);
        return res.status(201).json({ success: true, data: item });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const item = await Services.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) return res.status(404).json({ success: false, message: "Not found" });
        return res.status(200).json({ success: true, data: item });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const item = await Services.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ success: false, message: "Not found" });
        return res.status(200).json({ success: true, message: "Deleted successfully" });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
