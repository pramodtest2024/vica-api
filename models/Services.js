const mongoose = require('mongoose');

const servicesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
     description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    items: {
        type: String,
    }
});

module.exports = mongoose.model('Services', servicesSchema);
