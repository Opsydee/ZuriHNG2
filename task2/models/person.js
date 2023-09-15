const mongoose = require('mongoose');

const personSChema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const Person = mongoose.model('Person', personSChema);

module.exports = Person;
