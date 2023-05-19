require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

/**
 * Config response
 * JSON
 * FORM DATA
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Routes
 */
const router = require("./src/routes/Router.js");

app.use(router);
app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`);
});
