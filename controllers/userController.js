 const db = require("../models");
 const User = db.user;
 const Op = db.Sequelize.Op;

 // Méthode pour créer un nouvel utilisateur
 exports.create = (req, res) =>  {

    /* Je m'assure que le mail et le mot de passe sont bien renseignés.
    Deux conditions à vérifier:
        1. si la variable emailUser est vide
        OU
        2. si la variable passwordUser est vide
        ALORS
        J'arrête la création du compte utilisateur
    */

    // Je récupère le email saisi côté front-end. Je stocke l'email dans la variable emailUser.
    const emailUser = req.body.email;

    // Je récupère le mot de passe saisi côté front-end. Je stocke le mot de passe dans la variable passwordUser.
    const passwordUser = req.body.motdepasse;
    
    // Vérification des donnée email et mot de passe
    if(!emailUser || !passwordUser){
        res.status(400).send({
            message: "Veuillez compléter les champs."
        });

        return;
    }

    const user = {
        email: emailUser,
        password: passwordUser
    };

    User.create(user).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Il y a une erreur lors de la création de user"
        });
    });
 };

 // Méthode pour récupérer un utilisateur particulier grâce à son id (identifiant)
 exports.findOne = (req, res) => {
    // Je récupère l'id de l'utiliateur, puis je stocke l'id dans la variable idUser
    const idUser = req.params.id;

    // Je recherche l'utilisateur dans la base de données
    User.findByPk(idUser)
        .then(data => {
            if(data) { // SI je trouve l'utilisateur (data)
                res.send(data); //ALORS  je l'utilsateur (data)
            } else { // SINON (l'utilisateur n'existe pas)
                res.status(404).send({
                    message: `L'utilisateur avec l'identifiant ${idUser} n'existe pas.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message : `Erreur lors de la recherche de l'utilisateur avec l'identifiant ${idUser}`
            });
        });
 };

 exports.findAll = (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Erreur lors de la récupèration de tous les utilisateurs."
            });
        });
 }