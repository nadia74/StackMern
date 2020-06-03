// import React from "react";
// import { Container, Row, NavLink, Image, Col, Button, FormGroup, Form, Navbar, Nav, FormControl, ControlLabel } from "react-bootstrap";
// import API from "../../utils/API";
// import { Link } from 'react-router-dom';


// export class NavigbarPrivate extends React.Component {
//   disconnect = () => {
//     API.logout();
//     window.location = "/";
//   };


//   render() {

//     return (

//       <Navbar sticky="top" bg="dark" variant="dark">
//         <Navbar.Brand href="/">
//           <Container>
//             <Row>
//               <Col xs={6} md={4}>

//                 <Image src="/171x180" roundedCircle />
//               </Col>

//             </Row>
//           </Container>
//         </Navbar.Brand>
//         <Nav className="mr-auto">
//           <Nav.Link href="dashboard">My Microblogos</Nav.Link>
//           <Nav.Link href="profile">My profile</Nav.Link>
//           <Nav.Link variant="light" onClick={this.disconnect} block bsSize="large" type="submit">
//           Se déconnecter
//         </Nav.Link>

//         </Nav>

//       </Navbar>
//     )

//   }











//   //     <div >
//   //         <nav class="navbar navbar-dark bg-info " >
//   //             <button class="btn btn-outline-info btn-lg  bg-light" type="button">
//   //                 <Link to="/" style={{ textDecoration: 'none', color: "#48a9b8" }}>Home</Link>
//   //             </button>
//   //             <form class="form-inline ml-auto">
//   //                 <button class="btn btn-outline-info btn-lg  bg-light" type="button">
//   //                     <Link to="/login" style={{ textDecoration: 'none', color: "#48a9b8" }}>Login</Link>
//   //                 </button>
//   //                 <button class="btn btn-outline-info btn-lg  bg-light" type="button">
//   //                     <Link to="/signup" style={{ textDecoration: 'none', color: "#48a9b8" }}>Sign up</Link>
//   //                 </button>
//   //                 <button class="btn btn-outline-info btn-lg  bg-light" type="button">
//   //                     <Link to="/dashboard" style={{ textDecoration: 'none', color: "#48a9b8" }}>Dashboard</Link>
//   //                 </button>

//   //             </form>
//   //         </nav>
//   //     </div>
//   // );
//   //}
// } 