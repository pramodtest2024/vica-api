const mongoose = require("mongoose");

const universitySchema = mongoose.Schema({
  name: { type: String, required: true },         // University Name
  studyLocation: { type: String, required: true }, // Study location
  type: { type: String, required: true },          // Public / Private / Institute
  nominalDuration: { type: String, required: true }, // 3 years, 4 years etc.
  awards: { type: String, required: true },        // Bachelor's / Master's / Diploma etc.
  tuitionFee: { type: String, required: true },
  applicationFee: { type: String, required: true },
  languageRequirements: { type: String, required: true },
  otherRequirements: { type: String, required: false },
  image: { type: String },                         // Optional university image
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Universitydetails", universitySchema);
