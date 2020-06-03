const User = require("../../schema/schemaUser.js");
const passwordHash = require("password-hash");

async function signup(req, res) {
  const { firstname, lastname, pseudo, password, email } = req.body;
  if (!email || !password) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Veuillez remplir tous les champs"
    });
  }
  if (!firstname ) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Veuillez entrer le firstname"
    });
  }
  // if (firstname.lengh < 3) {
  //   //Le cas où l'email ou bien le password ne serait pas soumit ou nul
  //   return res.status(400).json({
  //     text: "Votre nom doit comporter au moins 3 caratères"
  //   });
  // }
  // Création d'un objet user, dans lequel on hash le mot de passe
  const user = {
    firstname,
    lastname, 
    pseudo,
    email,
    password: passwordHash.generate(password)
  };
  // On check en base si l'utilisateur existe déjà
  try {
    const findUser = await User.findOne({
      email
    });
    if (findUser) {
      return res.status(400).json({
        text: "L'utilisateur existe déjà"
      });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
  try {
    // Sauvegarde de l'utilisateur en base
    const userData = new User(user);
    const userObject = await userData.save();
    return res.status(200).json({
      text: "Succès",
      token: userObject.getToken()
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function login(req, res) {
  const { password, email } = req.body;
  if (!email || !password) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Veuillez remplir tous les champs"
    });
  }
  try {
    // On check si l'utilisateur existe en base
    const findUser = await User.findOne({ email });
    if (!findUser)
      return res.status(401).json({
        text: "l'email est incorrect"
      });
    if (!findUser.authenticate(password))
      return res.status(401).json({
        text: "Mot de passe incorrect"
      });
    return res.status(200).json({
      token: findUser.getToken(),
      text: "Authentification réussi",
      userid: findUser._id
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
}

async function getuser(req, res) {

  // On check en base si l'utilisateur existe déjà
  try {
    const user = await User.find({

    });
    return res.status(200).json(
      user
    );

  } catch (error) {
    return res.status(500).json({ error });
  }

}

async function getprofile(req, res) {
  userid=req.query.userid;//après query, le user id est la clé qui se trouve dans l'api.
  try {
    const user = await User.findOne({
      _id:userid
    });
    if (user===null) {
      return res.status(400).json({
        text: "L'utilisateur n'existe pas"
      });
    }

    return res.status(200).json(
      { id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        pseudo:user.pseudo,
        email: user.email
      }
    );

  } catch (error) {
    return res.status(500).json({ error });
  }

}

async function updateprofile(req, res) {
  const {id, firstname, lastname, pseudo, password, email } = req.body;
  if (!email || !password || !lastname || !firstname || !pseudo) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide"
    });
  }

  // On check en base si l'utilisateur existe déjà
  try {
    const findUser = await User.findOne({
      email
      
    });
    console.log(findUser._id);
        console.log(id);
       
    if (findUser._id != id && findUser.email === email) {
      return res.status(400).json({
        text: "L'utilisateur existe déjà"
        
      });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
  try {
    await User.updateOne({_id: id}, { firstname, lastname, pseudo, email, password :passwordHash.generate(password)});
    return res.status(200).json({
      text: "Succès",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
}

async function removeaccount(req, res) {
  const { id } = req.query;
  // On check en base si l'utilisateur existe déjà
  console.log("removing account" + id);
  try {
    await User.deleteOne({
      _id: id


    });
    return res.status(200).json(

    );

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }

}

//On exporte nos deux fonctions

exports.login = login;
exports.signup = signup;
exports.getuser = getuser;
exports.getprofile = getprofile;
exports.updateprofile = updateprofile;
exports.removeaccount=removeaccount;







