/**
 * le Fichier accueilRoute.js a pour mission de tracer les routes qui mènent vers la vue accueil.ejs
 */

const express = require("express");

const router = express.Router();

const accueilController = require("../controllers/accueilController");

// Maintenant, je trace ma route en utilisaant router

// La route pour l'accueil, exemple localhost:3009
router.get("/", accueilController.accueilView);

module.exports = router;