const express = require('express');
const app = express();
const path = require('path')
const notes = require('./routes/notes')

const port = 3001;
// middleware needed for all homework
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/notes', notes);

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})





application.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));