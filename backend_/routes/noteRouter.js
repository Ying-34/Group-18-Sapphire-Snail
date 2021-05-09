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
        .then(() => res.json(newNote.id))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/updateTipContent/:id').post((req,res) =>{
    notes.findById(req.params.id)
        .then(note =>{
            note.content = req.body.content;
            note.save()
                .then(() => res.json('note updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/updateTipTit/:id').post((req,res) =>{
    notes.findById(req.params.id)
        .then(note =>{
            note.noteTit = req.body.noteTit;
            note.save()
                .then(() => res.json('note updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/get/:pgName/:userName').get((req,res) =>{
    //console.log(req.params);
    notes.find({pageName: req.params.pgName, userName: req.params.userName})
    .then(allNotes =>{
        res.json(allNotes);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
