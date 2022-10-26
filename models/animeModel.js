const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema({
    title: { required: true, type: String },
    order: { required: true, type: String },
    alternative_title: { required: true, type: String }
});

module.exports = mongoose.model('Anime', AnimeSchema);
