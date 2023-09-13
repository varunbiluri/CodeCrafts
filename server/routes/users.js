var express = require('express');
var router = express.Router();
var User = require('../Model/user.model');

router.post('/signup', function(req, res) {
  const newUser = new User({
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
  });
  newUser.save()
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  });
});

router.get('/userdet', function(req, res) {
  User.find()
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  });
});

router.put('/update/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, {
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
  })
  .then(res => {
    res.send(res);
  })
  .catch(error => {
    res.send(error);
  });
});

router.delete('/delete/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id)
  .then(res => {
    res.send(res);
  })
  .catch(error => {
    res.send(error);
  });
});
module.exports = router;
