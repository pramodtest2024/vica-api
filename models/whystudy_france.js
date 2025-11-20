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
    image1: {
        type: String,
    },
    image2: {
        type: String,
    }
});

module.exports = mongoose.model('Whystudyfrance', servicesSchema);
