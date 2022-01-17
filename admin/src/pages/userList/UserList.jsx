import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import {DeleteOutline} from "@material-ui/icons";
import {userRows} from "../../sampleData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const [data, setData] = useState(userRows);
    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id !== id));
    };

    const columns = [
        { 
          field: 'id',
          headerName: 'ID',
          width: 100 },
        {
          field: 'username',
          headerName: 'Username',
          width: 200,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 160,
        },
        {
          field: 'action',
          headerName: "Action",
          width: 150,
          renderCell: (params)=>{
              return(
                  <>
                  <Link to={"/user/"+params.row.id}>
                    <button className="userListEdit">Edit</button>
                  </Link>
                  <DeleteOutline className="delete" onClick={()=>handleDelete(params.row.id)} />
                  </>
              )
          }
        },
      ];
    
    return (
        <div className="userList">
             <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    )
}
