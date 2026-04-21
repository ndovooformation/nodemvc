/**
 * Le fichier app.js est une application de type expressjs
 */

// J'importe le package expressjs
const express = require("express");

// import mysql2
const mysql2 = require("mysql2");

// import express-connection
const myConnection = require("express-myconnection");

// J'importe la route accueilRoute.js
const accueilRoute = require("./routes/accueilRoute");

// J'importe la route authentificationRoute.js
const authRoute = require("./routes/authentificationRoute");

// J'initie l'aplication expressjs
const app = express();

app.set("views", "./views");

app.set("view engine", "ejs");

// Utiliser les fichiers statiques qui sont dans le dossier public
app.use(express.static("public"));

// configurer la connection à la base de données
const optionConnection = {
    host: "localhost",
    user: "root",
    password : "pd+12SQm",
    port : 3306,
    database : "maygourmet"
};

app.use(myConnection(mysql2, optionConnection, "pool"));

app.use("/", accueilRoute);

// Ici, je laisse la route à "/", puis dans authentificationController.js, je précise la route router.get("/register")
app.use("/", authRoute);

module.exports = app;