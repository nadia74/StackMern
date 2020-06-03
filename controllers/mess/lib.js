const Mess = require("../../schema/schemaMess.js");
const Follow = require("../../schema/schemaFollow.js");
const User = require("../../schema/schemaUser.js");


async function createmess(req, res) {
  const { authorId, title, content } = req.body;
  if (!title || !content) {

    return res.status(400).json({
      text: "Requête invalide"
    });
  }

user = await User.findOne({
  _id:authorId
});

  // Création d'un objet mess
  const mess = {
    title,
    content,
    authorId,
    authorName:user.pseudo
  };
  
  try {

    const messData = new Mess(mess);
    const messObject = await messData.save();
    return res.status(200).json({
      text: "Succès",
     // token: userObject.getToken()
      
     

  
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error });
  }
}


async function getmess(req, res) {
  const { userId } = req.query;
  
  try {
    const followers = await Follow.find({
      follower: userId,
      blocked: false
    });

    userIdfollowers = followers.map((row, index) => row.followed)
    userIdfollowers.push(userId);
    
    const mess = await Mess.find({
      authorId: { $in: userIdfollowers }// ceci est un filtre pour trouver si trouver l'auteur ID est contenu dans le tableau userIDfollower
    });
    return res.status(200).json(
      mess
    );
  } catch (error) {
    return res.status(500).json({ error });
  }

}

async function removemessage(req, res) {
  const { id } = req.query;
  console.log("removing post" + id);
  // On check en base si l'utilisateur existe déjà
  try {
    await Mess.deleteOne({
      _id: id


    });
    return res.status(200).json(

    );

  } catch (error) {
    return res.status(500).json({ error });
  }

}


// async function getprofile(req, res) {
//   messid=req.query.userid;//après query, le user id est la clé qui se trouve dans l'api.
//   try {
//     const user = await User.findOne({
//       _id:userid
//     });
//     if (user===null) {
//       return res.status(400).json({
//         text: "L'utilisateur n'existe pas"
//       });
//     }

//     return res.status(200).json(
//       { id: user._id,
//         firstname: user.firstname,
//         lastname: user.lastname,
//         pseudo:user.pseudo,
//         email: user.email
//       }
//     );

//   } catch (error) {
//     return res.status(500).json({ error });
//   }

// }

// async function updateprofile(req, res) {
//   const {id, firstname, lastname, pseudo, password, email } = req.body;
//   if (!email || !password || !lastname || !firstname || !pseudo) {
//     //Le cas où l'email ou bien le password ne serait pas soumit ou nul
//     return res.status(400).json({
//       text: "Requête invalide"
//     });
//   }

//   // On check en base si l'utilisateur existe déjà
//   try {
//     const findUser = await User.findOne({
//       email
      
//     });
//     console.log(findUser._id);
//         console.log(id);
       
//     if (findUser._id != id && findUser.email === email) {
//       return res.status(400).json({
//         text: "L'utilisateur existe déjà"
        
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({ error });
//   }
//   try {
//     await User.updateOne({_id: id}, { firstname, lastname, pseudo, email, password :passwordHash.generate(password)});
//     return res.status(200).json({
//       text: "Succès",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error });
//   }
// }


//On exporte nos deux fonctions

exports.createmess = createmess;
exports.getmess = getmess;
exports.removemessage = removemessage;


