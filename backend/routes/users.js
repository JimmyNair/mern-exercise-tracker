const router = require('express').Router();

let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))//return
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    
    const newUser = new User({username});

    newUser.save() //save to database
        .then(() => res.json('User added!')) //return
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;