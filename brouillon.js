// --> API.js

follow: function(idFollower, idFollewed){
    return axios.post(`${burl}/follow/follow?idFollewer=`+idFollower+`&idFollowed=`+idFollewed, { headers: headers });
},
unfollow: function(idFollower, idFollewed) {
    return axios.post(`${burl}/follow/unfollow?idFollewer=`+idFollower+`&idFollowed=`+idFollewed, { headers: headers });
  },
isfollow: function(send){
    return axios.post(`${burl}/isfollow/isfollow?id=`+id,{ headers: headers });
  }


  //--> Follow/lib.js



  async function follow(req, res) {
    const { idFollewer, idFollowed } = req.body;
    
    const follow = {
      follower,
      followed, 
      blocked : false,
      
    };
    // On check en base si le following existe déjà
    try {
      const findFollow = await Follow.findOne({
        follower,
        followed
      });
      if (findFollow) {
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
       await followData.save();
      return res.status(200).json({
        text: "Succès",
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }


