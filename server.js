const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 8085;
const app = express();
const corsOptions = {
    origin: "http://localhost:3000",
};
const router = require("express").Router();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));