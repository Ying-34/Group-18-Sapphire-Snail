const router = require('express').Router();
let PComments = require('../models/comments');

router.route('/get/:pgName').get((req,res) =>{
    PComments.find({pageName: req.params.pgName})
        .then(page =>{
            //console.log(page[0].allComments);
             res.json(page[0].allComments);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const pageName = req.body.pageName;
  const allComments = req.body.comments;
  //console.log(allComments);

    const newCom = new PComments({pageName, allComments});

    newCom.save()
      .then(() => res.json('comments added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req, res) => {
    const pageName = req.body.pageName;
    const allComments = req.body.comments;
PComments.find({pageName: req.body.pageName})
    .then(pages => {
        const pageId=pages[0].id;
        //console.log(pageId);

        PComments.findById(pageId)
        .then(
            comments=>{
                comments.pageName = pageName;
                comments.allComments = allComments;

                comments.save()
                        .then(() => res.json('comments updated!'))
                        .catch(err => res.status(400).json('Error: ' + err));
            }
        )
    })
    .catch(err => res.status(400).json('Error: ' + err));
    
});

module.exports = router;