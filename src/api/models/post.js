const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    author: String,
    tags: [
        {
            id: Number,
            text: String
        }
    ],
    date: {type: Date, default: Date.now}
});

const model = mongoose.model("Post", postSchema);

module.exports = model;
