const router = require("express").Router();
const Club = require("../models/club");

router.get('/', (req, res) => {
    // Get all books from the book table
    Club.findAll().then((clubData) => {
      res.json(clubData);
    });
  });

router.post('/', async (req, res) => {
    const newClub = await Club.create(req.body);
    res.json(newClub);
})

router.get('/:clubName', (req, res) => {
    Club.findOne(
      {
        where: { 
          clubName: req.params.clubName
        },
      }
    ).then((clubData) => {
      res.json(clubData);
    });
  });

  module.exports = router;