const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
     last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    street: {
        type: String,
        default: ''
    },
    apartment: {
        type: String,
        default: ''
    },
    zip: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    reasonToStudy: {
        type: String,
        default: ''
    },
     studyLevel: {
        type: String,
        default: ''
    },
     hasEnglishTestResult: {
        type: String,
        default: ''
    },
     englishProficiency: {
        type: String,
        default: ''
    },
     availableFundsUSD: {
        type: String,
        default: ''
    },
    
    
})

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('User', userSchema);