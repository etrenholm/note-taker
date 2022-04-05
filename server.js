// initialize express
const express = require("express")
const app = express();

// set port
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// set api route
const apiRoutes = require('./routes/apiRoutes')
app.use('/api', apiRoutes);

// set html route
const htmlRoutes = require('./routes/htmlRoutes')
app.use('/', htmlRoutes);

// set error code
app.use((req, res) => {
    res.status(404).end()
})

// listen for port
app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}.`)
})