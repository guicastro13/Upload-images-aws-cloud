const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema); 