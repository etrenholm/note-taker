const router = require('express').Router();
const fs = require('fs')
let allNotes = require('../../db/db')

// package for unique IDs
const uuid = require('uuid/v1')

// GET notes API
router.get('/notes', (req, res) => {

    // GET request was received
    console.info(`${req.method} request received to get notes`);

    // GET notes
    res.json(allNotes);
})

// POST to notes API
router.post('/notes', (req, res) => {

    // POST request was received
    console.info(`${req.method} request received to add a note`);

    // POST notes
    const { title, text } = req.body
    const newNote = { title, text, id:uuid() }
    allNotes.push(newNote)

    // write file after note is added
    fs.writeFileSync('./db/db.json', JSON.stringify(allNotes, null, "\t"))
    res.json(allNotes)

})

// DELETE from notes API
router.delete('/notes/:id', (req, res) => {

    // DELETE request was received
    console.info(`${req.method} request received to delete a note`);

    // DELETE a note
    const id = req.params.id
    let updatedNotes = []
    for(let i = 0; i < allNotes.length; i++){
        if(allNotes[i].id !== id){
            updatedNotes.push(allNotes[i])
        }
    }
    allNotes = updatedNotes

    // rewrite file after notes are deleted
    fs.writeFileSync('./db/db.json', JSON.stringify(allNotes, null, "\t"))
    res.json(allNotes)

})

module.exports = router