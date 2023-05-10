const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name : String,
    edad: {
        type: Number,
        required: [true],
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;