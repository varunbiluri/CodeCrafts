var express = require('express');
var router = express.Router();
var Editor = require('../Model/editor.model');

router.post('/add', function(req, res) {
  const newEditor = new Editor({
    usercode: req.body.usercode,
    language: req.body.language,
  });
  newEditor.save()
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  });
});

router.get('/see', function(req, res) {
  Editor.find()
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  });
});

router.put('/update/:id', function(req, res) {
  Editor.findByIdAndUpdate(req.params.id, {
    usercode: req.body.usercode,
    language: req.body.language,
  })
  .then(res => {
    res.send(res);
  })
  .catch(error => {
    res.send(error);
  });
});

router.delete('/delete/:id', function(req, res) {
  Editor.findByIdAndRemove(req.params.id)
  .then(res => {
    res.send(res);
  })
  .catch(error => {
    res.send(error);
  });
});
module.exports = router;
