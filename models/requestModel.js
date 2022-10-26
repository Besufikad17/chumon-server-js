const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
    title: { required: true, type: String },
    status: { default: "pending", type: String }
});

module.exports =  mongoose.model('Request', RequestSchema);
