import React from "react";
import { Container, Row, NavLink, Image, Col, Button, FormGroup, Form, Navbar, Nav, FormControl, ControlLabel } from "react-bootstrap";
import API from "../../utils/API";
import { Link } from 'react-router-dom';


export class Navigbar extends React.Component {

  disconnect = () => {
    API.logout();
    this.setState({ isAuth: false });
    window.location = "/";

  };
  componentDidMount = async () => {
    this.setState({ isAuth: API.isAuth() });

  }
  state = {
    isAuth: true
  }

  render() {
    const { isAuth } = this.state;

    if (isAuth) {
      return (

        <Navbar sticky="top" bg="light" variant="light">

          <Nav className="mr-auto">
            <Nav.Link href="dashboard">Microblogosphere</Nav.Link>
            <Nav.Link href="message">Messages</Nav.Link>
            <Nav.Link href="profile">Settings</Nav.Link>

            <Nav.Link variant="light" onClick={this.disconnect} block bsSize="large" type="submit">
              Logout
          </Nav.Link>

          </Nav>

        </Navbar>
      )


    }
    return (



      <Navbar sticky="top" bg="light" variant="light">


        <Nav className="mr-auto">
          
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="signup">Register</Nav.Link>

        </Nav>

      </Navbar>

    )

  }

} 