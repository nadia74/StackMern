import React from "react";
import { Card,Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import API from "../../utils/API";

export class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error:""
  };
  send = async () => {
    const { email, password } = this.state;
    // if (!email || email.length === 0) {
    //   return;
    // }
    // if (!password || password.length === 0) {
    //   return;
    // }
    try {
      await API.login(email, password);
      

      window.location = "/dashboard";

    } catch (error) {
      //console.error(error);
      console.error(error.response);
      this.setState({error: error.response.data.text});
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    const { email, password, error } = this.state;
    return (
      <div className="Login">
        <Card className="CardL">
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
          
            autoFocus
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <div className="error">{error}</div>
        <div align="center">

        <button className="btn btn-light-outline btn-sm" onClick={this.send}  block size="small" type="submit">
          <LockOpenRoundedIcon color="primary"/>
        </button>
        </div>
        </Card>
      </div>




    );
  }
}
