/**
 * Le fichier app.js est une application de type expressjs
 */

// J'importe le package expressjs
const express = require("express");

// J'importe la route accueilRoute.js
const accueilRoute = require("./routes/accueilRoute");

// J'importe la route authentificationRoute.js
const authRoute = require("./routes/authentificationRoute");

// J'initie l'aplication expressjs
const app = express();

app.set("views", "./views");

app.set("view engine", "ejs");


app.use("/", accueilRoute);

// Ici, je laisse la route à "/", puis dans authentificationController.js, je précise la route router.get("/register")
app.use("/", authRoute);

module.exports = app;