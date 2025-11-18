const express = require('express');
const router = express.Router();
const Institutions = require('../models/institutions');
const checkToken = require('../middlewares/checkToken'); // token middleware

// ⛔ All routes require token
router.use(checkToken);

// ✔ GET all institutions
router.get('/', async (req, res) => {
    try {
        const institutionsList = await Institutions.find();

        if (!institutionsList) {
            return res.status(500).json({ success: false, message: "No institutions found" });
        }

        return res.status(200).json({ success: true, data: institutionsList });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});

// ✔ GET institution by ID
router.get('/:id', async (req, res) => {
    try {
        const institute = await Institutions.findById(req.params.id);

        if (!institute) {
            return res.status(404).json({ success: false, message: "Institute not found" });
        }

        return res.status(200).json({ success: true, data: institute });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});

// ✔ CREATE institution
router.post('/', async (req, res) => {
    try {
        let institute = new Institutions({
            institute_name: req.body.institute_name,
            icon: req.body.icon,
            color: req.body.color,
            location: req.body.location,
            no_of_programms: req.body.no_of_programms,
        });

        institute = await institute.save();
        return res.status(201).json({ success: true, data: institute });

    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});

// ✔ UPDATE institution
router.put('/:id', async (req, res) => {
    try {
        const institute = await Institutions.findByIdAndUpdate(
            req.params.id,
            {
                institute_name: req.body.institute_name,
                icon: req.body.icon,
                color: req.body.color,
                location: req.body.location,
                no_of_programms: req.body.no_of_programms,
            },
            { new: true }
        );

        if (!institute) {
            return res.status(404).json({ success: false, message: "Institute not found" });
        }

        return res.status(200).json({ success: true, data: institute });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});

// ✔ DELETE institution
router.delete('/:id', async (req, res) => {
    try {
        const institute = await Institutions.findByIdAndRemove(req.params.id);

        if (!institute) {
            return res.status(404).json({ success: false, message: "Institute not found" });
        }

        return res.status(200).json({ success: true, message: "Institute deleted successfully" });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
});

module.exports = router;
