const mongoose = require('mongoose');

const institutionsSchema = mongoose.Schema({
    institute_name: {
        type: String,
        required: true
    },
    icon: {
        type: String
    },
    color: {
        type: String
    },
    location:{
        type:String

    },
       no_of_programms:{
        type:String

    }

})

module.exports = mongoose.model('Institutions', institutionsSchema);