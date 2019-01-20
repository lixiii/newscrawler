var express = require("express");
var router = express.Router();
const fs = require("fs");

// simple routes
router.use( '/', express.static("./hc/hackcambridge.com"));

module.exports = router;
