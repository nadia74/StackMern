const Follow = require("../../schema/schemaFollow.js");

async function blockuser(res, res){
  try{

  }
  catch{

  }
}

async function follow(req, res) {
  const { idFollower, idFollowed } = req.query;
  
  const follow = {
    follower: idFollower,
    followed: idFollowed, 
    blocked : false
    
  };
  //On check en base si le following existe déjà
  try {
    const findFollow = await Follow.findOne({
      follower: idFollower,
      followed: idFollowed
    });
    if (findFollow) {
      //console.log('tata');
      return res.status(400).json({
        text: "Vous suivez déjà cet utilisateur"
      });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
  try {
    // Sauvegarde du following en base
    const followData = new Follow(follow);
    console.log(follow);
     await followData.save();
    return res.status(200).json({
      text: "Succès",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getfollowers(req, res) {
  const { userId } = req.query;
// console.log(req);
// console.log(req.query);
// console.log(req.body);

 // req.query.then((a)=>{console.log(a)});

  //console.log(userId);
  try {
    const followers = await Follow.find({ //retourne les résultats de la table--> c'est un tableau d'objets follow defini dans le shéma
      followed: userId,
      blocked: false
    });
    
    userIdfollowers = followers.map((row, index) => row.follower)//la fonction map prend le tableau et applique une fonction à chacun des éléments
    //ci la fonction map c'est : à partir de l'objet, je récupere la proppriété followed
    //userIdfollowers.push(userId);//push sert à entrer des éléments dans un tableau
    // const follow = await Follow.find({
      //   authorId: { $in: userIdfollowers }
      // });
      console.log(userIdfollowers);
      return res.status(200).json(
        userIdfollowers
        );
    } catch (error) {
      console.log(error);
    return res.status(500).json({ error });
  }

}

async function unfollow(req, res) {
  //console.log('tata');
  const { idFollower, idFollowed } = req.query;
  
  const follow = {
    follower: idFollower,
    followed: idFollowed, 
    blocked : false
    
  };
  //On check en base si le following existe déjà
  try {
    const findFollow = await Follow.findOne({
      follower: idFollower,
      followed: idFollowed
    });
    if (findFollow) {
      try {
        await Follow.deleteOne({
          follower: idFollower,
      followed: idFollowed
        });
        
      } catch (error) {
      return res.status(500).json({ error });
    }
  
  }
}
    catch (error) {
      return res.status(500).json({ error });
    }
  
}
  
// async function unfollow(req, res) {
//   const { id } = req.query;
//   console.log("unfollowing");
//   // On check en base si l'utilisateur existe déjà
//   try {
//     await Follow.deleteOne({
//       _id: id


//     });
//     return res.status(200).json(

//     );

//   } catch (error) {
//     return res.status(500).json({ error });
//   }

// }

//On exporte nos deux fonctions

exports.follow = follow;
exports.unfollow = unfollow;
exports.getfollowers=getfollowers;
exports.blockuser=blockuser;

