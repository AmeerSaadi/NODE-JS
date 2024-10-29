const port = 4320;
const express = require('express');
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const path = require('path');
app.use(express.static(path.join(__dirname, "public")));
let checkpoints = [];
let visits = [];

app.post('/addCheckpoint', (req, res) => {
    const { name, location } = req.body;
    const checkpoint = { id: checkpoints.length, name, location };
    checkpoints.push(checkpoint);
    res.status(200).json("Checkpoint added successfully");
});
app.get('/checkpoints', (req, res) => {
    res.status(200).json(checkpoints);
});

app.post('/addVisit', (req, res) => {
    const { checkpointId } = req.body;
    const visit = { id: visits.length, checkpointId, visitedAt: new Date() };
    visits.push(visit);
    res.status(200).json("Visit registered successfully");
});

app.get('/visits', (req, res) => {
    res.status(200).json(visits);
});
