/**
 * Le fichier app.js est une application de type expressjs
 */

// J'importe le package expressjs
const express = require("express");

// J'importe la route accueilRoute.js
const accueilRoute = require("./routes/accueilRoute");

// J'initie l'aplication expressjs
const app = express();

app.set("views", "./views");

app.set("view engine", "ejs");


app.use("/", accueilRoute);

module.exports = app;