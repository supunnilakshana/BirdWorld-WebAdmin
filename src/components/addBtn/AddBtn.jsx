import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import './addbtn.css'

const AddBtn = () => {
  return (
    <div className="add_btn">
       <Link to ="/birds">
      <Button variant="primary" >ADD+</Button>{' '}
       </Link>
      </div>
  )
}

export default AddBtn
