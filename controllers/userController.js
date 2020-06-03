/*C'est ici que l'ensemble des routes et des 
fonctions associées seront placées pour l'api /user*/ 
const account = require('./account/lib.js');

module.exports = function (app) {
    app.post('/login',account.login);
    app.post('/signup',account.signup);
    //app.post('/blockuser', account.blockuser);
    app.get('/getuser',account.getuser);
    app.get('/getprofile',account.getprofile);
    app.post('/updateprofile',account.updateprofile);
    app.delete('/removeaccount',account.removeaccount);

}




// Définition du routeur /user :

// Maintenant que notre schéma
//  a été correctement créé nous allons 
//  nous connecter à la base de donnée et 
//  associer la route /user à un contrôleur 
//  à partir du fichier server.js.

