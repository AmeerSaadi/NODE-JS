const port = 4320;
const express = require('express');
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const path = require('path');
app.use(express.static(path.join(__dirname, "public")));