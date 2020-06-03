const mongoose = require("mongoose");
const config = require("../config/config");

const messSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true
    },
    content: {
      type: String,
      trim: true,
      required: true
    },
    authorId: {
      type: String,
      trim: true,
      required: true
    }, 
    authorName:{
      type:String,
      required: true,
    }
  },
  { timestamps: { createdAt: "created_at" } }
);



module.exports = mongoose.model("Mess", messSchema);

// Ce schéma définit donc un modèle User, comportant 
// un unique email et un mot de passe.
// Nous associons deux méthodes à chacun des objets, 
// la première authenticate(password) permettant de vérifier 
// si le mot de passe est bien celui associé à l’utilisateur 
// et la seconde getToken() permettant de générer un jeton d’accès 
// à partir du modèle et de
//  notre chaîne de caractères secrète présente dans /config