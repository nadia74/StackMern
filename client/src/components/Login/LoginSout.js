import React from "react";
//import { Button, Card, Col, Form } from "react-bootstrap";
// import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
// import SaveIcon from '@material-ui/icons/Save';
// import API from "../../utils/API";

export class LoginSout extends React.Component {

    state ={
        email:"",
        password:""
    };



    render (){
const {email, password} = this.setState;
return (
    <div>
<form>
    <label>Login</label>
    <input type="email" name ="email" value={this.state.email} />
    <label>password</label>
    <input type="password" name="password" value={this.state.password}/>

</form>
<div>{this.state.email} {this.state.password}</div>
</div>
);

}


}

