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
import { Button,Card, CardDeck } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';

import API from "../../utils/API";

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

                <div style={{color:primary}} align="center" >Microblogosphere </div>







            </tr>
        </thead>
    );
}


const TableBody = props => {
    const primary = pink[500]; // #F44336
    const accent = cyan[500]; // #E040FB
    const classes = useStyles();
    const rows = props.userData.reverse().map((row, index) => {
        const currentuser= API.getcurrentuserid();
        if(row._id !=  currentuser){
        return (
            <Card className="Members" align="center" key={index}>
                <Card.Title className={classes.root} align="center" >{row.pseudo}</Card.Title>
  <Card.Img variant="top" src="https://www.ambiance-sticker.com/images/Image/sticker-boheme-gecko-4-ambiance-sticker-col-inc_SAND_L076.jpg" />
  <Card.Body>
    <div align="center"><button className="btn btn-primary-outline btn-sm btn-group" role="group">
                <VisibilityRoundedIcon style={{color:accent}} />

                </button>
                    <button className="btn btn-primary-outline btn-sm btn-group" role="group" onClick={() => props.follow(row._id)} >                
                    <LinkIcon style={{color:accent}} />
                    </button>
                    <button className="btn btn-primary-outline btn-sm btn-group" role="group" onClick={() => props.unfollow(row._id)}>
                    <LinkOffIcon style={{color:accent}} />
                    </button>
                    <button className="btn btn-primary-outline btn-sm btn-group" role="group" >
                    <BlockRoundedIcon style={{color:primary}} />
                    </button>
                    
                </div>  </Card.Body>
</Card>
            // <tr key={index}>
            //     <td><div align="left">{row.pseudo}</div></td>
            //     <td><div align="right"><button className="btn btn-primary-outline btn-sm btn-group" role="group">
            //     <VisibilityRoundedIcon color="primary" />

            //     </button>
            //         <button className="btn btn-primary-outline btn-sm btn-group" role="group" onClick={() => props.follow(row._id)} >                
            //         <LinkIcon color="primary" />
            //         </button>
            //         <button className="btn btn-primary-outline btn-sm btn-group" role="group" onClick={() => props.unfollow(row._id)}>
            //         <LinkOffIcon color="primary" />
            //         </button>
            //         <button className="btn btn-primary-outline btn-sm btn-group" role="group" >
            //         <BlockRoundedIcon color="secondary" />
            //         </button>
                    
            //     </div></td>

                
            // </tr>
                );
            }
            
        }
            );
        
        
    return <CardDeck >{rows}</CardDeck>;
            }

// const TableBody = props => {
//     const primary = pink.A500;

//     const rows = props.userData.reverse().map((row, index) => {
//         const currentuser= API.getcurrentuserid();
//         if(row._id !=  currentuser){
//         return (
//             <tr key={index}>
//                 <td><div align="left">{row.pseudo}</div></td>
//                 <td><div align="right"><button className="btn btn-primary-outline btn-sm btn-group" role="group">
//                 <VisibilityRoundedIcon color="primary" />

//                 </button>
//                     <button className="btn btn-primary-outline btn-sm btn-group" role="group" onClick={() => props.follow(row._id)} >                
//                     <LinkIcon color="primary" />
//                     </button>
//                     <button className="btn btn-primary-outline btn-sm btn-group" role="group" onClick={() => props.unfollow(row._id)}>
//                     <LinkOffIcon color="primary" />
//                     </button>
//                     <button className="btn btn-primary-outline btn-sm btn-group" role="group" >
//                     <BlockRoundedIcon color="secondary" />
//                     </button>
                    
//                 </div></td>

                
//             </tr>
//                 );
//             }
            
//         }
//             );
        
        
//     return <tbody>{rows}</tbody>;
//             }
            
const Table = (props) => {
    const {userData, follow, unfollow} = props;
                    return (
            <div align="center" className="CardM">

                    <table style={{ width: 80 + '%' }} >
                        <TableHeader />
                        <TableBody userData={userData} follow={follow} unfollow={unfollow} />
                    </table>
                </div>
                );
        }
        
export default Table;