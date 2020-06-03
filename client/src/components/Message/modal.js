import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Form, FormGroup, Button, Card, CardDeck } from "react-bootstrap";
import SendIcon from '@material-ui/icons/Send';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles1 = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SimpleModal =()=> {
  const classes = useStyles1();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (

    <div style={modalStyle} className={classes.paper}>
      <table style={{width: 70 + '%'}} className="table table-sm" >
            
            <tr>
              <td>
            <Form>
                  <Form.Row>
                    <Form.Group controlId="title"  size="small">
                      <Form.Label>Title</Form.Label>
                      <i className="error">
                      
                    </i>
                      <Form.Control
                        autoFocus
                        
                                              onChange={this.handleChange}
                        type="text"
                        />
                    </Form.Group>
                    <FormGroup controlId="content" size="small">
                      <Form.Label>Content</Form.Label>
                      <i className="error">
                      
                    </i>
                      <Form.Control
                      as="textarea" 
                      rows="3"
                        placeholder="Enter here your message. 140 characters max."
                        
                        
                        onChange={this.handleChange}
                        />
                    </FormGroup>
  
                  </Form.Row>
  
  
                </Form></td>
                <td align ="left">
                <Button variant="" onClick={this.send} block size="small" type="submit">
                <SendIcon color="primary"/>
  
          </Button>
  
                </td>
              
            </tr>
              </table>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}