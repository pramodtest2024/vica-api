const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    items: { type: String },

    author: {
      name: { type: String },
      image: { type: String },
      designation: { type: String }
    },

    tags: { type: [String], default: [] },
    publishDate: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blogs", blogSchema);
