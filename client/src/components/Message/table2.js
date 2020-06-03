import React from 'react';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import API from "../../utils/API";
import pink from '@material-ui/core/colors/pink';
import { Form, FormGroup, Button, Card, CardDeck } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import EditIcon from '@material-ui/icons/Edit';
import purple from '@material-ui/core/colors/purple';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import Modal from '@material-ui/core/Modal';




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
        border: '0px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const SimpleModal = props => {

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
            <table style={{ width: 100 + '%' }} className="table table-sm" >

                <tr>
                    <td>
                        <Form>
                            <Form.Row>
                                <Form.Group controlId="title" size="small">
                                    <Form.Label>Title</Form.Label>
                                    <i className="error">

                                    </i>
                                    <Form.Control
                                        autoFocus
                                        value={props.title}
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
                                        value={props.content}


                                    />
                                </FormGroup>

                            </Form.Row>


                        </Form></td>
                    <td align="left">
                        <Button variant="" block size="small" type="submit">
                            <SendIcon color="primary" />

                        </Button>

                    </td>

                </tr>
            </table>

        </div>
    );
    const ter = purple[300];

    return (
        <div>
            <button className="btn btn-primary-outline btn-sm btn-group" role="group" onClick={handleOpen}>
                <EditIcon style={{ color: ter }} />


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

const SimpleModalSeeMessage = props => {

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
            <table style={{ width: 100 + '%' }} className="table table-sm" >

                <tr>
                    <td>
                        <p style={{ color: '#00bcd4' }}>Title : <b style={{ color: '#FE6B8B' }}>{props.title}</b></p>
                        <p style={{ color: '#00bcd4' }}>Content : <b style={{ color: '#FE6B8B' }}>{props.content}</b></p>
                        <p style={{ color: '#00bcd4' }}>Author : <b style={{ color: '#FE6B8B' }}>{props.author}</b></p>
                        <p style={{ color: '#00bcd4' }}>Creation Date : <b style={{ color: '#FE6B8B' }}>{props.date}</b></p>
                        <p style={{ color: '#00bcd4' }}>Updated : <b style={{ color: '#FE6B8B' }}>{props.modificate}</b></p>
                    </td>

                </tr>
            </table>

        </div>
    );
    const ter = purple[300];

    return (
        <div>
            <button className="btn btn-primary-outline btn-sm btn-group" role="group" onClick={handleOpen}>
                <VisibilityRoundedIcon style={{ color: '#00bcd4' }} />

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

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 28,
        padding: '0 30px',
    },
    avatar: {
        borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: '15px',
        padding: '0 0px',
        margin: '0 0 0 0px',


    },
    blue: {
        borderColor: pink,
        background: 'linear-gradient(45deg, #00bcd4, 30%, #e6ee9c 90%)',
        border: 0,
        borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 28,
        padding: '0 30px',
    },
    small: {
        borderColor: 'pink',
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
}));

const TableHeader = () => {
    return (
        <h5>Messages</h5>
    );
}

const TableBody = props => {
    const primary = pink[500]; // #F44336
    const accent = cyan[500]; // #E040FB
    const ter = purple[300];
    const classes = useStyles();
    var value = [...props.messData];
    console.log(value.slice().sort((d1, d2) => d2.created_at - d1.created_at));
    console.log(value.slice().sort((d1, d2) => d1.updatedAt - d2.updatedAt));

    const rows = props.messData.sort((d1, d2) => new Date(d2.created_at) - new Date(d1.created_at)).map((row, index) => {
        const userid = API.getcurrentuserid();
        //  console.log(row.updatedAt);
        if (row.authorId === userid) {

            return (

                <Card className="MessagesCurrentuser" align="center" key={index}>
                    <Card.Title className={classes.blue} align="center" >{row.title}</Card.Title>
                    <Card.Body className="CardBody">
                        <Card.Text>

                            <p classeName="Messagecontent">{row.content}</p>
                            <Divider />
                            <table width="100%">
                                <tr>

                                    <td align="left">
                                        <div className={classes.avatar}>
                                            <Avatar alt="Remy Sharp" src="https://www.ambiance-sticker.com/images/Image/sticker-boheme-gecko-4-ambiance-sticker-col-inc_SAND_L076.jpg" className={classes.large} />
                                        </div>
                                    </td>
                                    <td align="left">
                                        <div className="sentby">
                                            <i className="Messageauthor">Sent by : {row.authorName}</i>
                                        </div>
                                    </td>
                                    <td className="buttonmessageleft">
                                        <span align="right" className="MessagesButton"><button className="btn btn-primary-outline btn-sm btn-group" role="group">
                                            <SimpleModalSeeMessage style={{ color: accent }} title={row.title} content={row.content} author={row.authorName} date={row.created_at} modifdate={row.updatedAt} />

                                        </button>
                                            <button className="btn btn-primary-outline btn-sm btn-group" role="group">
                                                <SimpleModal title={row.title} content={row.content} />

                                            </button>

                                            <button className="btn btn-primary-outline btn-sm btn-group"
                                                onClick={() => props.removemessage(index, row._id)}><DeleteRoundedIcon color="secondary" /></button>
                                        </span>
                                    </td>
                                </tr>
                            </table>


                        </Card.Text>

                    </Card.Body>
                </Card>







                // <tr key={index}>
                //         <td>{row.authorId}</td>
                //         <td>{row.title}</td>
                //         <td>{row.content}</td>
                //         <td><button className="btn btn-primary-outline btn-sm btn-group" onClick={() => props.removemessage(index, row._id)}><DeleteRoundedIcon color="secondary" /></button>
                //         </td>
                //     </tr>
            );
        }
        else {
            return (


                <Card className="Messages" align="left" key={index}>
                    <Card.Title className={classes.root} align="center" >{row.title}</Card.Title>
                    <Card.Body className="CardBody">
                        <Card.Text>

                            <p classeName="Messagecontent">{row.content}</p>
                            <Divider />

                            <table width="100%">
                                <tr>
                                    <td align="left">
                                        <div className={classes.avatar}>
                                            <Avatar alt="Remy Sharp" src="https://www.ambiance-sticker.com/images/Image/sticker-boheme-gecko-4-ambiance-sticker-col-inc_SAND_L076.jpg" className={classes.large} />
                                        </div>
                                    </td>
                                    <td align="left">
                                        <div className="sentby">
                                            <i className="Messageauthor">Sent by : {row.authorName}</i>
                                        </div>
                                    </td>
                                    <td className="buttonmessageleft">
                                        <span align="right" className="MessagesButton"><button className="btn btn-primary-outline btn-sm btn-group" role="group">

                                            <SimpleModalSeeMessage style={{ color: accent }} title={row.title} content={row.content} author={row.authorName} date={row.created_at} modifdate={row.updatedAt} />

                                        </button></span>
                                    </td>
                                </tr>
                            </table>
                        </Card.Text>

                    </Card.Body>
                </Card>

                // <tr key={index}>
                //         <td>{row.authorId}</td>
                //         <td>{row.title}</td>
                //         <td>{row.content}</td>
                //         <td></td>



                //     </tr>
            );

        }
    });

    return <CardDeck >{rows}</CardDeck>;
}

const Table = (props) => {
    const { messData, removemessage } = props;
    return (
        <div align="center" className="CardM">

            <table style={{ width: 70 + '%' }} className="table table-sm" >
                <TableHeader />
                <TableBody messData={messData} removemessage={removemessage} />
            </table>
        </div>
    );
}

export default Table;