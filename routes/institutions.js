const express = require('express');
const router = express();

const Institutions = require('../models/institutions');

router.get('/', async (req, res) => {
    const institutionsList = await Institutions.find();

    if (!institutionsList) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(institutionsList)
})

router.get('/:id', async (req, res) => {
    const institute = await Institutions.findById(req.params.id);

    if (!institute) {
        res.status(500).json({ success: false, message: 'The institute with the given ID not exists' })
    }
    res.status(200).send(institute)
})

router.post('/', async (req, res) => {
    let institute = new Institutions({
        institute_name: req.body.institute_name,
        icon: req.body.icon,
        color: req.body.color,
        location: req.body.location,
        no_of_programms: req.body.no_of_programms,

    })

    institute = await institute.save();

    if (!institute)
        return res.status(404).send('Institutes cannot be created')
    res.send(institute);
})

router.put('/:id', async (req, res) => {
    const institute = await Institutions.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color
    }, {
        new: true
    })

    if (!institute)
        return res.status(404).send('Institutions cannot be created')
    res.send(institute);
})

router.delete('/:id', (req, res) => {
    Institutions.findByIdAndRemove(req.params.id).then(institute => {
        if (institute) {
            return res.status(200).json({ success: true, message: 'Institutions deleted successfully' })
        } else {
            return res.status(404).json({ success: false, message: 'Institutions cannot find' })
        }
    }).catch(err => {
        return res.status(400).json({ success: false, error: err })
    })
})

module.exports = router;