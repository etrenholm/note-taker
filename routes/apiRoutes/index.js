const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = notes
    res.json(results)
})

router.post('/notes', (req, res) => {

})

module.exports = router