module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "pd+12SQm",
    BD: "maygourmet",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
/*
Les paramètres HOST, USER, PASSWORD, BD et dialect sont utlisés pour se connecter à MySQL.
Le paramètre pool est utilisé pour Sequelize:
max : nombre maximum de connections par pool
min : nombre minimum de connections par pool
idle : durée maximum (en millisecondes) qu'une connection peut résever avant d'être réalisée
acquire :durée maximum (en millisecondes) qu'une pool va tenter de se connecter avant de crasher en erreur.
*/ 