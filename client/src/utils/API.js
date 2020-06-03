import axios from "axios";
const headers = {
    "Content-Type": "application/json"
};
const burl = "http://localhost:8800";

export default {
    login: async function(email, password) {
        const { data } = await axios.post(
            `${burl}/user/login`, {
                email,
                password
            }, {
                headers: headers
            }
        );
      localStorage.setItem("token", data.token);
      localStorage.setItem("userid", data.userid);
    },
    signup: function(send) {
        return axios.post(`${burl}/user/signup`, send, { headers: headers });
    },
    updateprofile: function(send) {
        return axios.post(`${burl}/user/updateprofile`, send, { headers: headers });
    },

    isAuth: function() {
        return localStorage.getItem("token") !== null;
    },
    logout: function() {
        localStorage.clear();
    },
    getuser: function() {
        return axios.get(`${burl}/user/getuser`, { headers: headers });
      },
      getfollowers: function(userId) {
        return axios.get(`${burl}/follow/getfollowers?userId=` + userId, { headers: headers });
      },
    getprofile: function(userid){
        return axios.get(`${burl}/user/getprofile?userid=`+ userid, { headers: headers });
    },
    getcurrentuserid: function(){
        return localStorage.getItem("userid");
    },
    removeaccount: function(id){
        return axios.delete(`${burl}/user/removeaccount?id=`+id,{ headers: headers });

    },
    getmess: function(userId) {
        return axios.get(`${burl}/mess/getmess?userId=` + userId, { headers: headers });
      },
    remove: function(id){
        return axios.delete(`${burl}/mess/remove?id=`+id,{ headers: headers });
    
      },
      follow: function(idFollower, idFollowed){
        return axios.post(`${burl}/follow/follow?idFollower=`+idFollower+`&idFollowed=`+idFollowed, { headers: headers });
    },
    blockuser: function(blocker, blocked){
        return axios.post(`${burl}/user/blockuser?blocker=`+blocker+`&blocked=`+blocked, { headers: headers });
    },
    unfollow: function(idFollower, idFollowed) {
        return axios.post(`${burl}/follow/unfollow?idFollower=`+idFollower+`&idFollowed=`+idFollowed, { headers: headers });
      },
    createmess: function(send) {
        return axios.post(`${burl}/mess/create`, send, { headers: headers });
    }
};