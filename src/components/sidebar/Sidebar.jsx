import React from 'react'

import "./sidebar.scss"

//Import icons
import {GiParrotHead} from 'react-icons/gi'
import {MdOutlineDashboardCustomize} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'
import {GiNestBirds} from 'react-icons/gi'
import {MdGroups2} from 'react-icons/md'
import {BsShopWindow} from 'react-icons/bs'

import {Link} from "react-router-dom";



const Sidebar = () => {

   


    return (
       <div className="sidebar">
          <div className="top">
              <Link to = "/" style={{textDecoration: "none"}}>
              <span className="logo">
                  <GiParrotHead className="icon" />Bird World Admin</span>
              </Link>
              
          </div>
          <hr/>
          <div className="bottom">
            <ul>

            <Link to = "/" style={{textDecoration: "none"}}>
            <li>
                    <MdOutlineDashboardCustomize className = 'icon' />
                    <span>Dashboard</span>
                </li>
            </Link>
            <Link to = "/users" style={{textDecoration: "none"}}>
            <li>
                <AiOutlineUser className='icon' />
                    <span>Users</span>
                </li>
            </Link>
            <Link to = "/birds" style={{textDecoration: "none"}}>
                <li>
                    <GiNestBirds className = 'icon' />
                    <span>Birds</span>
                </li>
            </Link>
                <li>
                    <MdGroups2 className='icon' />
                    <span>Community</span>
                </li>
                <li>
                    <BsShopWindow className = 'icon' />
                    <span>Store</span>
                </li>
            </ul>
          </div> 
       </div>
    )
}

export default Sidebar
