const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const translation = new Schema({
    email: String,
    firstWord: String,
    secondWord: String,
    firstLanguage: String,
    secondLanguage: String,
    updated_at: Date
});

module.exports = mongoose.model("Translations", translation)