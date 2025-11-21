const mongoose = require("mongoose");

const UniversitySchema = mongoose.Schema({
    name: { type: String, required: true },               // University Name
    country: { type: String },
    city: { type: String },
    programs: { type: [String] },                         // Example: ["Computer Science", "MBA"]
    tuitionFee: { type: String },
    applicationFee: { type: String },
    language: { type: String },
    type: { type: String },                               // Public / Private
    studyLocation: { type: String },
    nominalDuration: { type: String },
    awards: { type: String },
    image: { type: String },                              // University image URL
}, { timestamps: true });

module.exports = mongoose.model("UniversitySearch", UniversitySchema);
