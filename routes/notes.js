const notes = require('express').Router();
const uuid = require('./helpers/uuid');
const fs =require('fs');
const readFromFile = util.promisfy(fs.)

// Post request based off of exercises
notes.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const {note} = req.body
     
    if(note) {
        const newNotes = {
            note,
            note_id: uuid()
        }
    }

    const noteString = JSON.stringify(newNotes);

    fs.readFile('../db/db.json', 'utf8', (err, data) => {
        if(err) {
            console.log(err);
        }else {
            const parsedNotes = JSON.parse(data);
            parsedNotes.push(newNotes)
        }

        fs.writeFile(
            '../db/db.json',
            JSON.stringify(parsedReviews, null, 4),
            (writeErr) =>
              writeErr
                ? console.error(writeErr)
                : console.info('New notes have been added!')
          );
    })
});

// Get request based off of exercises
notes.get(`/api/notes`, (req, res) => {
    console.info(`${req.method} request granted for new notes`)

    readFromFile('../db/db.json')
    .then((data) => {
        res.json(JSON.parse)
    })
})










module.exports = notes;