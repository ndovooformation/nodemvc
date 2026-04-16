/**
 * Le fichier myserver.js a pour mission de créer le serveur de l'application.
 */

// J'importe le package HTTP
const http = require("http");

// J'importe l'application app.js
const app = require("./app");

// Je crée un serveur HTTP
const server = http.createServer(app);

const numeroPort = 3009;

server.listen(numeroPort, () => {
    console.log("Le serveur est à l'écoute sur le port ", numeroPort);
});