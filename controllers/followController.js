/*C'est ici que l'ensemble des routes et des 
fonctions associées seront placées pour l'api /user*/ 
const follow = require('./follow/lib.js');

module.exports = function (app) {
    app.post('/follow',follow.follow);
    app.post('/unfollow',follow.unfollow);
    app.get('/getfollowers',follow.getfollowers);



}




// Définition du routeur /user :

// Maintenant que notre schéma
//  a été correctement créé nous allons 
//  nous connecter à la base de donnée et 
//  associer la route /user à un contrôleur 
//  à partir du fichier server.js.

