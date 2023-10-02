import React from 'react'
import Button from 'react-bootstrap/Button';
import './birdlistTable.css'

import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 }, 
  { field: 's_name', headerName: 'Scientific Name', width: 300 },
  { field: 'image', headerName: 'Image', width: 300 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 300,
    renderCell: (params) => {
        return (
          <div>
            <Link to="/birds_update">
                <Button variant= "success" className= "update" onClick={() => handleEdit(params.row.id)}>Update</Button>
            </Link>
            
            <Button variant= "danger" className= "delete" onClick={() => handleDelete(params.row.id)}>Delete</Button>
          </div>
        );
      },
  },
 
];

const rows = [
  { id: 1, s_name: 'Snow', image: 'Jon',actions: 35 },
  { id: 2, s_name: 'Snow', image: 'Jon',actions: 35 },
  { id: 3, s_name: 'Snow', image: 'Jon',actions: 35 },
  { id: 4, s_name: 'Snow', image: 'Jon',actions: 35 },
  { id: 5, s_name: 'Snow', image: 'Jon',actions: 35 },
  
];

const handleEdit = (id) => {
  // Implement the edit action here, e.g., navigate to the edit page
};

const handleDelete = (id) => {
  // Implement the delete action here, e.g., show a confirmation dialog
};


const Datatable = () => {
    return (
        <div className="datatable">
            <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}

export default Datatable
