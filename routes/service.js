const express = require('express');
const router = express.Router();
const Services = require('../models/service');   // correct model import
const checkToken = require('../middlewares/checkToken'); // token middleware

// ⛔ All routes require token
router.use(checkToken);

// ✔ GET all services
router.get('/', async (req, res) => {
    try {
        const serviceList = await Services.find();

        if (!serviceList.length) {
            return res.status(404).json({ success: false, message: "No services found" });
        }

        return res.status(200).json({ success: true, data: serviceList });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});

// ✔ GET single service by ID
router.get('/:id', async (req, res) => {
    try {
        const service = await Services.findById(req.params.id);

        if (!service) {
            return res.status(404).json({ success: false, message: "Service not found" });
        }

        return res.status(200).json({ success: true, data: service });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});

// ✔ CREATE service
router.post('/', async (req, res) => {
    try {
        let service = new Services({
            title: req.body.title,
            content: req.body.content,
            image1: req.body.image1,
            image2: req.body.image2
        });

        service = await service.save();
        return res.status(201).json({ success: true, data: service });

    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});

// ✔ UPDATE service
router.put('/:id', async (req, res) => {
    try {
        const service = await Services.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                content: req.body.content,
                image1: req.body.image1,
                image2: req.body.image2
            },
            { new: true }
        );

        if (!service) {
            return res.status(404).json({ success: false, message: "Service not found" });
        }

        return res.status(200).json({ success: true, data: service });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});

// ✔ DELETE service
router.delete('/:id', async (req, res) => {
    try {
        const service = await Services.findByIdAndRemove(req.params.id);

        if (!service) {
            return res.status(404).json({ success: false, message: "Service not found" });
        }

        return res.status(200).json({ success: true, message: "Service deleted successfully" });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
});

module.exports = router;
