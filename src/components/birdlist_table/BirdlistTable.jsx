// Import necessary libraries and components
import React from 'react';
import Button from 'react-bootstrap/Button';
import './birdlistTable.css';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import Image1 from "../../assets/image2.jpg"
// Custom component for rendering images
const ImageRenderer = ({ value }) => <img src={value} alt="Bird" style={{ width: '100%', height: 'auto' }} />;

// Define columns with the custom image renderer
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 's_name', headerName: 'Scientific Name', width: 300 },
  {
    field: 'image',
    headerName: 'Image',
    width: 300,
    renderCell: (params) => <ImageRenderer value={params.value} />,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 300,
    renderCell: (params) => (
      <div>
        <Link to={"/birds_update"}>
          <Button variant="success" className="update" onClick={() => handleEdit(params.row.id)}>
            Update
          </Button>
        </Link>
        <Button variant="danger" className="delete" onClick={() => handleDelete(params.row.id)}>
          Delete
        </Button>
      </div>
    ),
  },
];

// Sample data
const rows = [
  { id: 1, s_name: 'Accipiter cirrhocephalus', image: {Image1}, actions: 35 },
  { id: 2, s_name: 'Corvus coronoides', image: 'URL_TO_YOUR_IMAGE_2', actions: 35 }
  
]
// Function placeholders for handleEdit and handleDelete
const handleEdit = (id) => {
  // Implement your logic here
};

const handleDelete = (id) => {
  // Implement your logic here
};

// Main Datatable component
const Datatable = () => {
  return (
    <div className="datatable">
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
    </div>
  );
};

export default Datatable;
