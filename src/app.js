const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const app = express();

app.use(cors())
app.use(express.json());

let nextId = 1;

// don't create the controller and router just yet. this is here at this step for testing to ensure that the comunication works before going too deep
app.post('/observations', ((request, response) => {
    const newObservation = request.body.data;

    newObservation.observation_id = nextId++

    response.status(201).json({
        data: newObservation,
    })
}))

app.use(notFound);
app.use(errorHandler);

module.exports = app;
