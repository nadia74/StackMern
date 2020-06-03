//Définition des modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Connexion à la base de donnée
mongoose
  .connect("mongodb://localhost/rushmern")
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((e) => {
    console.log("Error while DB connecting");
    console.log(e);
  });

//On définit notre objet express nommé app
const app = express();

//Body Parser
const urlencodedParser = bodyParser.urlencoded({
  extended: true
});
app.use(urlencodedParser);

app.use(bodyParser.json());

//Définition des CORS
app.use( (req, res, next) =>{
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
  
  //res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
});


//Définition du routeur
const router = express.Router();
app.use("/user", router);
require(__dirname + "/controllers/userController")(router);
app.use("/mess", router);
require(__dirname + "/controllers/messController")(router);
app.use("/follow", router);
require(__dirname + "/controllers/followController")(router);

//Définition et mise en place du port d'écoute
const port = 8800;
app.listen(port, () => console.log(`Listening on port ${port}`));