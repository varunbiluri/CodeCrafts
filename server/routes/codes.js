var express = require('express');
var router = express.Router();
var Codes = require('../Model/codes.model');

router.post('/add', function(req, res) {
  const newCodes = new Codes({
    problem: req.body.problem,
    problemDescription: req.body.problemDescription,
    input: req.body.input,
    output: req.body.output,
  });
  newCodes.save()
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  });
});

router.get('/see', function(req, res) {
  Codes.find()
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  });
});

router.put('/update/:id', function(req, res) {
  Codes.findByIdAndUpdate(req.params.id, {
    problem: req.body.problem,
    problemDescription: req.body.problemDescription,
    input: req.body.input,
    output: req.body.output,
  })
  .then(res => {
    res.send(res);
  })
  .catch(error => {
    res.send(error);
  });
});

router.delete('/delete/:id', function(req, res) {
  Codes.findByIdAndRemove(req.params.id)
  .then(res => {
    res.send(res);
  })
  .catch(error => {
    res.send(error);
  });
});
module.exports = router;
