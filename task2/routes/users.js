const express = require('express');
const Person = require('../models/person')


const createPerson = async(req, res) => {
    try {
        const person = new Person(req.body);
        await person.save();
        res.status(201).json(person)
    } catch (error) {
        console.log(error);
    }
} 

const findPerson = async(req, res) => {
    try {
        const id = req.params.id
        const person = await Person.findById(id)
        if (!person) {
            console.log("No such a person in the database");
        }
        res.status(201).json(person);
    } catch (error) {
        console.log("There seems to be an error in the server");
    }
}

const updatePerson = async(req, res) => {
    try {
        const id = req.params.id;
        const person = await Person.findByIdAndUpdate(id, req.body, { new:true });
        if(!person) {
            console.log("No such a person");
        }
        res.status(201).json(person);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deletePerson = async(req, res) => {
    try {
        const id = req.params.id;
        const person = await Person.findByIdAndRemove(id);

        if(!person) {
            res.status(404).json({ error: "Person not found "})
        }
        res.json({ "Message": "Record deleted from the database"})
    } catch (error) {
        console.log(error);
    }
}

const router = express.Router();

router.post('/', createPerson);
router.get('/:id', findPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

module.exports  = router