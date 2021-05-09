const router = require('express').Router();
let notes = require('../models/tips');


router.route('/postTip').post((req,res) =>{
    const pageName = req.body.pageName;
    const userName = req.body.userName;
    const x = req.body.x;
    const y = req.body.y;
    const content =  req.body.content;
    const noteTit = req.body.noteTit;

    const newNote = new notes({
        pageName,
        userName,
        x,
        y,
        content,
        noteTit
    });

    newNote.save()
        .then(() => res.json('note added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/get/:pgName/:userName').get((req,res) =>{
    notes.find({pageName: req.body.pageName})
    .then(allNotes =>{
        res.json(allNotes);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
