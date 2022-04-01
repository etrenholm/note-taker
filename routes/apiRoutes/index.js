const router = require('express').Router();
const notes = require('../../db/db')

// GET NOTES API
router.get('/notes', (req, res) => {
    res.json(notes)
})

// POST TO NOTES API
router.post('/notes', (req, res) => {

    req.body = notes.length.toString();
    res.json(notes)
})

module.exports = router