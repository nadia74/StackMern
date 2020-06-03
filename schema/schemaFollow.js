const mongoose = require("mongoose");
const config = require("../config/config");

const followSchema = mongoose.Schema(
  {
    follower: {
      type: String,
      trim: true,
      required: true
    },
    followed: {
      type: String,
      trim: true,
      required: true
    }, 
    blocked: {
      type: Boolean,
      required: true
    }
    
  },
  { timestamps: { createdAt: "created_at" } }
);



module.exports = mongoose.model("Follow", followSchema);

// Ce schéma définit donc un modèle User, comportant 
// un unique email et un mot de passe.
// Nous associons deux méthodes à chacun des objets, 
// la première authenticate(password) permettant de vérifier 
// si le mot de passe est bien celui associé à l’utilisateur 
// et la seconde getToken() permettant de générer un jeton d’accès 
// à partir du modèle et de
//  notre chaîne de caractères secrète présente dans /config