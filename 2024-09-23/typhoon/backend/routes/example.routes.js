const express = require("express");
const router = express.Router();

router.get("/ab*cd", (req, res) => {
  res.send("ab*cd");
});

router.get(/a/, (req, res) => {
  res.send("/a/");
});

router.get(/.*fly$/, (req, res) => {
  res.send("/.*fly$/");
});

router.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

router.get("/flights/:from-:to", (req, res) => {
  res.send(req.params);
});

const postHandler = (req, res) => {
  res.send(req.params);
};

const postMiddleWare = (req, res, next) => {
  console.log("next");
  next();
};

router.get("/posts/:postId", postMiddleWare, postHandler, (req, res) => {
  res.send(req.params);
});

router.post("/send/:sendId", (req, res) => {
  res.send(req.params);
});

router.delete("/send/:sendId", (req, res) => {
  res.send(req.params);
});

module.exports = router;
