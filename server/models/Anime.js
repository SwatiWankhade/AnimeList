const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
    name: String,
    email: String ,
    password: String,
    date: Number,
})      

const animeModel = mongoose.model("users",animeSchema)

module.exports = animeModel;