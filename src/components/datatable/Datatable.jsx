import React from 'react'
import './datatable.css'
import Button from 'react-bootstrap/Button';

import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    type: 'text',
    width: 200,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 300,
    renderCell: (params) => {

      
        return (
          <div>
            
            
            <Button variant= "danger" className= "delete" onClick={() => handleDelete(params.row.id)}>Delete</Button>
          </div>
        );
      },
  },
  {
    /* field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160, */
    /* valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`, */

      renderCell:(params) =>{
        return(
          <>
             {/*  <span>params.row.lastName</span>
          <p>params.row.age</p> */}
          </>
         
        )
      }
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'sguru@gmail.com' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'sguru@gmail.com'},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'sguru@gmail.com' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'sguru@gmail.com' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'sguru@gmail.com' },
  { id: 6, lastName: 'Melisandre', firstName: null, email: 'sguru@gmail.com' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara',email: 'sguru@gmail.com'},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'sguru@gmail.com' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'sguru@gmail.com'},
];

const handleDelete = (id) => {
  
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
