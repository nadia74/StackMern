import React from "react";
import { Button, CardDeck, Table } from "react-bootstrap";
import Table1 from './table';
import Modal from '@material-ui/core/Modal';
import API from "../../utils/API";

export class Dashboard extends React.Component {

  componentDidMount = async () => {
    try {
      const { data } = await API.getuser();//ceci retourne une promesse, quand on fait await sur une promesse ça attend le résultat pour continuer le conuer
      this.setState({ user: data });

      // window.location = "/dashboard";
      console.log(data);
    } catch (error) {
      console.error(error.response);
      this.setState({ error: error.response.data.text }); //on défini une propriété et error vaut donc ce qu'il y a derriere les deux points
    }

    try {

      const { data } = await API.getfollowers(API.getcurrentuserid());
      this.setState({ followers: data });
      // window.location = "/dashboard";
      console.log(data);
    } catch (error) {
      console.error(error.response);
      this.setState({ error: error.response.data.text }); //on défini une propriété et error vaut donc ce qu'il y a derriere les deux points
    }
  }
  follow = async (idFollowed) => {
    const { follow } = this.state;
    const userid = API.getcurrentuserid();
    try {
      await API.follow(userid, idFollowed);//ceci retourne une promesse, quand on fait await sur une promesse ça attend le résultat pour continuer le conuer
    } catch (error) {
      console.error(error.response);
      this.setState({ error: error.response.data.text });
      return;//on défini une propriété et error vaut donc ce qu'il y a derriere les deux points
    }


  }
  unfollow = async (idFollowed) => {
    const { follow } = this.state;
    const userid = API.getcurrentuserid();

    try {
      await API.unfollow(userid, idFollowed);//ceci retourne une promesse, quand on fait await sur une promesse ça attend le résultat pour continuer le conuer
    } catch (error) {
      console.error(error.response);
      //this.setState({ error: error.response.data.text }); 
      return;//on défini une propriété et error vaut donc ce qu'il y a derriere les deux points
    }

  }

  blockuser = async (bloker, blocked) => {
    try {

    }
    catch{

    }
  }

  state = {
    user: [

    ],
    followers: [
    ]
  }


  render() {
    const { user, followers } = this.state;
    return (

      <div className="Dashboard">
        <CardDeck className="carddeck" >
          <Table1 userData={user} follow={this.follow} unfollow={this.unfollow} followers={followers} />
        </CardDeck>
      </div>
    );
  }
}
