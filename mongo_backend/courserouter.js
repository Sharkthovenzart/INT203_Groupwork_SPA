var express = require("express");
var router = express.Router();
var Course = require("./coursemodel");

// GET all
router.get("/", (req, res) => {
  Course.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
  Course.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (create new data)
router.post("/", (req, res) => {
  var obj = new Course(req.body);
  obj.save((err) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Already added new data !");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  Course.findByIdAndUpdate(req.params._id, req.body, (err) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Already updated data !");
  });
});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Course.findByIdAndDelete(req.params._id, (err) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("Already deleted data !");
  });
});

module.exports = router;