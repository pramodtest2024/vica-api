const mongoose = require('mongoose');

const servicesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true      // Academics, Satisfaction, Experience, Life, Community
    },
    content: {
        type: String,
        required: true
    },
    image1: {
        type: String,
    },
    image2: {
        type: String,
    }
});

module.exports = mongoose.model('Services', servicesSchema);
