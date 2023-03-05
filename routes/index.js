const express = require("express");
const router = express.Router();
const db = require("../firebase");

const ref = db.ref("Users");

/* GET home page. */
router.get("/", (req, res, next) => {
  ref.once("value", (snapshot) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(snapshot.val());
    console.log(snapshot.val());
  });
});

module.exports = router;
