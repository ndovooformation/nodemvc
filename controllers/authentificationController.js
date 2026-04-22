/***
 * Le fichier authentificationController.js a pour misssion de gérer les authentifications des utilisations.
 */

module.exports = {
    
    // la vue register
    registerView : (req, res) => {
        res.render("register");
    },

    // Je crée une métthode asynchrone (async)
    registerUser: async (req, res) => {
        console.log("#### Controller RegisterUser **");
        console.log("### Controller - req : ", req.body);

        const emailUser = req.body.email;
        const passwordUser = req.body.motdepasse;

        console.log("emailUser :", emailUser);
        console.log("passwordUser : ", passwordUser);
        
        /* Je m'assure que le mail et le mot de passe sont bien renseignés.
        Deux conditions à vérifier:
        1. si la variable emailUser est vide
        OU
        2. si la variable passwordUser est vide
        */
        if(!emailUser || !passwordUser){
            return res.render('register', {
                error: "Veuillez compléter tous les champs."
            });
        }
        
        // Il n'y a pas d'erreur. Passe à a suite

        

        let requeteSql = "INSERT INTO user(id, email, password) VALUES(?, ?, ?)";

        let ordreDonnees = [null, emailUser, passwordUser];

        req.getConnection((erreur, connection) => {
            if(erreur) {
                console.log("Erreur connexion à la BDD : ", erreur);
            } else {
                connection.query(requeteSql, ordreDonnees, (err, nouvelUtilisateur) => {
                    if(err) {
                        console.log("Erreur de requête : ", err);
                    } else {
                        console.log("Utilisateur créé avec succès");
                        // rediriger verls la pagge accueil
                        res.redirect("/");
                    }
                });
            }
        });
        
    }
}