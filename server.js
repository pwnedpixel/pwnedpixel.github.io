const express = require("express");
const os = require("os");
const app = express();
var bodyParser = require("body-parser");
const format = require("util").format;
var uuid = require("uuid");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 3000;

// This will serve the webpage
app.use(express.static('./dist/andy-website'));
app.listen(port, () => console.log("Listening on port " + port));
