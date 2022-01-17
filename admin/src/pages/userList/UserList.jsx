import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import {DeleteOutline} from "@material-ui/icons";

export default function UserList() {
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
                  <button className="userListEdit">Edit</button>
                  <DeleteOutline className="delete" />
                  </>
              )
          }
        },
      ];
      
      const rows = [
        { id: 1, username: 'John Wick', email: "jon@stark.com", status: "active", transaction: "$250.00"},
        { id: 2, username: 'Duncan Idaho', email: "duneresident.com", status: "active", transaction: "$999.00"}

    ];
    
    return (
        <div className="userList">
             <DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    )
}
