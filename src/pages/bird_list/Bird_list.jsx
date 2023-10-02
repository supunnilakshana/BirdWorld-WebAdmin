import React from 'react'

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import BirdTlist from '../../components/birdlist_table/BirdlistTable'
import AddBtn from '../../components/addBtn/AddBtn'
import {Link} from "react-router-dom";
import './bird_list.css';

const Bird_list = () => {
  return (
    <div className="birdlist">
      <Sidebar/>
      
      <div className = "birdlist_Container">
      <Navbar className="nav"/>
      <AddBtn/>
      <div className="list">
      <BirdTlist/>
      </div>
      </div>

      
      
    </div>

  )
}

export default Bird_list;
