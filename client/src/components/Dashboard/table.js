import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LinkIcon from '@material-ui/icons/Link';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import ShareIcon from '@material-ui/icons/Share';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import BlockRoundedIcon from '@material-ui/icons/BlockRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import pink from '@material-ui/core/colors/pink';
import { Button, Form, FormGroup, Card, CardDeck } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import EditIcon from '@material-ui/icons/Edit';
import purple from '@material-ui/core/colors/purple';

import API from "../../utils/API";

import Modal from '@material-ui/core/Modal';
import { indigo } from '@material-ui/core/colors';




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
            <p style={{ color: '#00bcd4' }}>Pseudo : <b style={{ color: '#FE6B8B' }}>{props.pseudo}</b></p>
            <p style={{ color: '#00bcd4' }}>Firstname : <b style={{ color: '#FE6B8B' }}>{props.firstname}</b></p>
            <p style={{ color: '#00bcd4' }}>Lastname : <b style={{ color: '#FE6B8B' }}>{props.lastname}</b></p>
            <p style={{ color: '#00bcd4' }}>email : <b style={{ color: '#FE6B8B' }}>{props.email}</b></p>
            <p style={{ color: '#00bcd4' }}>Member since : <b style={{ color: '#FE6B8B' }}>{props.created}</b></p>
            <p style={{ color: '#00bcd4' }}>Number of messages : </p>
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




const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 28,
    padding: '0 30px',
  },
});


const TableHeader = () => {
  const primary = pink[500]; // #F44336
  const accent = cyan['A200']; // #E040FB
  return (
    <thead>
      <tr>

        <div style={{ color: primary }} align="center" >Microblogosphere </div>
      </tr>
    </thead>
  );
}


const TableBody = props => {

  const primary = pink[500]; // #F44336
  const accent = cyan[500]; // #E040FB
  const classes = useStyles();
  const rows = props.userData.reverse().map((row, index) => {
    var myfollower = true;
    var displayMyfollower;

    if (!props.followers.includes(row._id)) {
      displayMyfollower = "";

    }
    else {
      displayMyfollower = "Follows me";

    }
    console.log(row._id);
    console.log(props.followers);
    console.log('**************************************');
    //console.log(props.followers);
    //console.log(row._id);

    const currentuser = API.getcurrentuserid();
    if (row._id != currentuser) {
      return (
        <Card className="Members" align="center" key={index}>
          <Card.Title className={classes.root} align="center" >{row.pseudo}</Card.Title>
          <Card.Img variant="top" src="https://www.ambiance-sticker.com/images/Image/sticker-boheme-gecko-4-ambiance-sticker-col-inc_SAND_L076.jpg" />
          <Card.Body>
            <div align="center"><button className="btn btn-primary-outline btn-sm btn-group" role="group">
              <SimpleModal pseudo={row.pseudo}
                firstname={row.firstname}
                lastname={row.lastname}
                email={row.email}
                created={row.created_at}

              />

            </button>
              <button className="btn btn-primary-outline btn-sm btn-group" role="group" onClick={() => props.follow(row._id)} >
                <LinkIcon style={{ color: accent }} />
              </button>
              <button className="btn btn-primary-outline btn-sm btn-group" role="group" onClick={() => props.unfollow(row._id)}>
                <LinkOffIcon style={{ color: accent }} />
              </button>
              <button className="btn btn-primary-outline btn-sm btn-group" role="group" >
                <BlockRoundedIcon style={{ color: primary }} />
              </button>
              {displayMyfollower}

            </div>  </Card.Body>
        </Card>
        
      );
    }

  }
  );


  return <CardDeck >{rows}</CardDeck>;
}


const Table = (props) => {
  const { userData, follow, unfollow, followers } = props;
  return (
    <div align="center" className="CardM">

      <table style={{ width: 80 + '%' }} >
        <TableHeader />
        <TableBody userData={userData} follow={follow} unfollow={unfollow} followers={followers} />
      </table>
    </div>
  );
}

export default Table;