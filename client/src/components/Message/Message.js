import React from "react";
import { Button, Table, FormGroup, CardDeck, Card, Col, Form } from "react-bootstrap";
import Table1 from './table2';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';
import API from "../../utils/API";



export class Message extends React.Component {
  componentDidMount = async () => {
    try {
      const { data } = await API.getmess(API.getcurrentuserid());//ceci retourne une promesse, quand on fait await sur une promesse ça attend le résultat pour continuer le conuer
      this.setState({ messages: data });
      // window.location = "/dashboard";
      console.log(data);
    } catch (error) {
      console.log("titi");
      console.error(error.response);
      this.setState({ error: error.response.data.text }); //on défini une propriété et error vaut donc ce qu'il y a derriere les deux points
    }
  }

  removemessage = async (index, id) => {
    const { messages } = this.state;
    try {
      await API.removemessage(id);//ceci retourne une promesse, quand on fait await sur une promesse ça attend le résultat pour continuer le conuer
    } catch (error) {
      console.error(error.response);
      this.setState({ error: error.response.data.text });
      return;//on défini une propriété et error vaut donc ce qu'il y a derriere les deux points
    }
    this.setState({
      messages: messages.filter((message, i) => {
        return i !== index
      }),
    })
  }

  state = {

    title: "",
    content: "",
    errortitle: "",
    errorcontent: "",
    messages: []


  };


  send = async () => {
    const { title, content } = this.state;
    let haserror = false;
    this.setState({
      errortitle: "",
      errorcontent: ""
    });

    if (!title || title.length === 0) {
      this.setState({ errortitle: "    Veuillez entrer un titre" })
      haserror = true;
    }
    else if (title.length < 3) {
      this.setState({ errortitle: "   Le titre doit avoir au moins 3 caracteres" })
      haserror = true;
    }
    if (!content || content.length === 0) {
      this.setState({ errorcontent: "    Veuillez rédiger votre message avant de l'envoyer" })
      haserror = true;
    }
    else if (content.length > 140) {
      this.setState({ errorcontent: "   Votre message doit contenir 140 caractères maximum" })
      haserror = true;
    }
    // if (!title || title.length === 0) return;
    // if (!content || content.length === 0) return;
    // if (!content || content.length > 140) return;
    if (!haserror) {
      try {
        const { data } = await API.createmess({ title, content, authorId: API.getcurrentuserid() });
        window.location = "/message";
      } catch (error) {
        console.error(error.response);
        //this.setState({ error: error.response.data.text }); //on défini une propriété et error vaut donc ce qu'il y a derriere les deux points

      }
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };




  render() {
    const { title, content, messages, errortitle, errorcontent } = this.state;

    return (


      <div className="Message">

        <div className="Dashboard">

          <h5>My Microblogos</h5>
          <div align="center">
            <table style={{ width: 70 + '%' }} className="table table-sm" >

              <tr>
                <td>
                  <Form>
                    <Form.Row>
                      <Form.Group controlId="title" size="small">
                        <Form.Label>Title</Form.Label>
                        <i className="error">
                          {errortitle}
                        </i>
                        <Form.Control
                          autoFocus
                          value={title}
                          onChange={this.handleChange}
                          type="text"
                        />
                      </Form.Group>
                      <FormGroup controlId="content" size="small">
                        <Form.Label>Content</Form.Label>
                        <i className="error">
                          {errorcontent}
                        </i>
                        <Form.Control
                          as="textarea"
                          rows="3"
                          placeholder="Enter here your message. 140 characters max."
                          value={content}

                          onChange={this.handleChange}
                        />
                      </FormGroup>

                    </Form.Row>


                  </Form></td>
                <td align="left">
                  <Button variant="" onClick={this.send} block size="small" type="submit">
                    <SendIcon color="primary" />

                  </Button>

                </td>

              </tr>
            </table>
          </div>
          <div>
            <CardDeck className="MessageCardDeck" >
              <Table1 messData={messages} removemessage={this.removemessage} />
            </CardDeck>
          </div>





        </div>





      </div>
    );
  }
}
