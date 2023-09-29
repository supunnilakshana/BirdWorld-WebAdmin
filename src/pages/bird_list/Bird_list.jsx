import React from 'react'
import Button from 'react-bootstrap/Button';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import BirdTlist from '../../components/birdlist_table/BirdlistTable'
import './bird_list.css';

const Bird_list = () => {
  return (
    <div className="birdlist">
      <Sidebar/>
      <div className = "birdlist_Container">
      <Navbar/>
      <div className="add_btn">
      <Button variant="primary">ADD+</Button>{' '}
      </div>
      <div className="list">
      <BirdTlist/>
      </div>
      
      </div>

      
     
    </div>
  )
}

export default Bird_list;
