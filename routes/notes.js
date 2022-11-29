const notes = require('express').Router();
const uuid = require('./helpers/uuid');
const fs =require('fs');
const readFromFile = util.promisfy(fs.readFile)

// Post request based off of exercises
notes.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const {note} = req.body
     
    if(note) {
        const newNotes = {
            note,
            note_id: uuid()
        }
    }

    const noteString = JSON.stringify(newNotes);

    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
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
          )
    })
    

});

// Get request based off of exercises
notes.get(`/`, (req, res) => {
    console.info(`${req.method} request granted for new notes`)

    readFromFile('../db/db.json')
    .then((data) => {
        res.json(JSON.parse(data))
    });
});

// Delete request for notes
notes.delete('/:id', (req, res) => {
    readFromFile('./db/db.json', 'utf-8')
    .then((data) => {
        var odlerNotes = [].concat(JSON.parse(data));
        var newNotes = odlerNotes.filter(note => note.id !== req.params.id)
        writeToFile('./db/db.json', JSON.stringify(newNotes))
        .then(() => res.json({msg: 'Everything is looking good'}))
        .catch(err => res.status(400).json({msg: `There is not a note with this id ${req.params.id}`}))
    });
})
// this should be everything








module.exports = notes;