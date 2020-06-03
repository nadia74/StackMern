import React from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import SaveIcon from '@material-ui/icons/Save';
import API from "../../utils/API";

export class Profile extends React.Component {
    
  state = {
    id:"",
    firstname: "",
    lastname: "",
    pseudo: "",
    email: "",
    password: "",
    cpassword: "",
    error: ""
  }


      send = async () => {
        const { id, firstname, lastname, pseudo, email, password, cpassword } = this.state;
        if (!email || email.length === 0) return;
        if (!lastname || lastname.length === 0) return;
        if (!firstname || firstname.length === 0) return;
        if (!pseudo || pseudo.length === 0) return;
        if (!password || password.length === 0 || password !== cpassword) return;
        try {
          const { data } = await API.updateprofile({ id, firstname, lastname, pseudo, email, password });
          window.location = "/dashboard";
        } catch (error) {
          console.error(error.response);
          this.setState({ error: error.response.data.text }); //on défini une propriété et error vaut donc ce qu'il y a derriere les deux points
    
        }
      };
      handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
      };
   
    componentDidMount = async () => {
        try {
            const userid = API.getcurrentuserid();
          const  {data} = await API.getprofile(userid);//ceci retourne une promesse, quand on fait await sur une promesse ça attend le résultat pour continuer le conuer
          console.log(data);
          this.setState({ 
            id: data.id,
            firstname: data.firstname, 
            lastname: data.lastname, 
            pseudo: data.pseudo, 
            email: data.email, 
            password: data.password, 
            cpassword: data.cpassword  });
          // window.location = "/dashboard";
        } catch (error) {
          console.error(error.response);
          this.setState({ error: error.response.data.text }); //on défini une propriété et error vaut donc ce qu'il y a derriere les deux points
        }
      }
      disconnect = () => {
        API.logout();
        window.location = "/";
    
      };
      removeaccount = async() => {
        try {
          const userid = API.getcurrentuserid();

           await API.removeaccount(userid);
          this.disconnect();//ceci retourne une promesse, quand on fait await sur une promesse ça attend le résultat pour continuer le conuer
        } catch (error) {
          console.error(error.response);
         // this.setState({ error: error.response.data.text }); 
          return;//on défini une propriété et error vaut donc ce qu'il y a derriere les deux points
        }
      }
     
      


    render() {
        const { firstname, lastname, pseudo, email, password, cpassword } = this.state;

        return (
          <div className="Profile">
            
          

                <Card className="CardP">

                    <Card.Body>
                        <Card.Title>My personnal informations</Card.Title>
                        <Card.Text>
                        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="firstname">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                autoFocus
                value={firstname}
                onChange={this.handleChange}
                type="text"
                placeholder={firstname} 
                />
            </Form.Group>
            <Form.Group as={Col} controlId="lastname">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={lastname}
                onChange={this.handleChange}
                placeholder={lastname} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="pseudo">
              <Form.Label>Pseudo</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={pseudo}
                onChange={this.handleChange} placeholder={pseudo} />
            </Form.Group>
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={this.handleChange} placeholder={email} />
            </Form.Group>
          </Form.Row>
<p className="confprof">Confirm changes with your password.<br/>
You can also confirm by setting a new one.</p>
          <Form.Row>
            <Form.Group as={Col} controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={this.handleChange}
                type="password" placeholder={password} />
            </Form.Group>
            
            <Form.Group as={Col} controlId="cpassword">
              <Form.Label>Confirmation</Form.Label>
              <Form.Control
                value={cpassword}
                onChange={this.handleChange}
                type="password" placeholder={cpassword} />
            </Form.Group>
          </Form.Row>

        </Form>
        <div align="right">
        <Button className="btn btn-primary-outline btn-group" role="group" variant="" onClick={this.removeaccount}  bsSize="small" type="submit">
delete account        </Button>
        <Button className="btn btn-primary-outline btn-group" role="group" variant="" onClick={this.send}  bsSize="small" type="submit">
          <SaveIcon color="primary"/>
        </Button>
        <Button variant="" className="btn btn-primary-outline btn-sm btn-group" role="group" href="dashboard" onClick="dashboard"  bsSize="large" type="submit">
          <CancelRoundedIcon color="secondary"/>
        </Button>
        </div>
        </Card.Text>
        </Card.Body>

        </Card>






                        

            </div>
        );
    }
}
