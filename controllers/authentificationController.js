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
        
    }
}