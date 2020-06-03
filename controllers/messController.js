/*C'est ici que l'ensemble des routes et des 
fonctions associées seront placées pour l'api /user*/ 
const mess = require('./mess/lib.js');

module.exports = function (app) {
    app.post('/createmessage',mess.createmess);
    app.get('/getmess',mess.getmess);
    app.delete('/removemessage',mess.removemessage);


}




// Définition du routeur /user :

// Maintenant que notre schéma
//  a été correctement créé nous allons 
//  nous connecter à la base de donnée et 
//  associer la route /user à un contrôleur 
//  à partir du fichier server.js.

