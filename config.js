const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://ayushparihareee21:Ayush69@cluster0.aiblo7x.mongodb.net/?retryWrites=true&w=majority");

connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    message: {
        type: String,
        require: true
    }
});

// collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;