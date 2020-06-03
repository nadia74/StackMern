import React from 'react';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import API from "../../utils/API";


const TableHeader = () => { 
    return (
        <h5>Messages</h5>
    );
}

const TableBody = props => { 
    const rows = props.messData.reverse().map((row, index) => {
        const userid = API.getcurrentuserid();
if(row.authorId === userid){

    return (
        <tr key={index}>
                <td>{row.authorId}</td>
                <td>{row.title}</td>
                <td>{row.content}</td>
                <td><button className="btn btn-primary-outline btn-sm btn-group" onClick={() => props.removemessage(index, row._id)}><DeleteRoundedIcon color="secondary" /></button></td>


                
            </tr>
        );
    }
    else {
        return(
        <tr key={index}>
                <td>{row.authorId}</td>
                <td>{row.title}</td>
                <td>{row.content}</td>
                <td></td>


                
            </tr>
        );

    }
    });
    
    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { messData, removemessage} = props;
        return (
            <div align="center" className="CardM">

            <table style={{width: 70 + '%'}} className="table table-sm" >
                <TableHeader />
                <TableBody messData={messData} removemessage={removemessage} />
            </table>
            </div>
        );
}

export default Table;