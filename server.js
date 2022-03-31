const express = require("express")
const PORT = process.env.PORT || 3001;
const app = express();

const notes = require('./db/db')
console.log(notes)

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'))
// })

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}.`)
})