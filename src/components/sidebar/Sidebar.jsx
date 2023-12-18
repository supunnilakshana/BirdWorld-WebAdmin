import React from 'react'

import "./sidebar.css"
import Logo from "../../assets/logo.jpeg"

//Import icons
import {GiParrotHead} from 'react-icons/gi'
import {MdOutlineDashboardCustomize} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'
import {GiNestBirds} from 'react-icons/gi'
import {MdGroups2} from 'react-icons/md'
import {BsShopWindow} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa' 
import {FiSettings} from 'react-icons/fi'

import {NavLink} from "react-router-dom";




const Sidebar = ({children}) => {

    const menuItem = [
        {
            path:"/",
            name:"Dashboard",
            icon:<MdOutlineDashboardCustomize/>
        },
        {
            path:"/users",
            name:"Users",
            icon:<AiOutlineUser/>
        },
       
        {
            path:"/birds_list",
            name:"Birds",
            icon:<GiNestBirds/>
        },
        {
            path:"/community",
            name:"Community",
            icon:<MdGroups2/>
        },
        {
            path:"/store",
            name:"Store",
            icon:<BsShopWindow />
        },
        {
            path:"/setting",
            name:"Setting",
            icon:<FiSettings />
        },
       
    ] 

    return(
            <div className="bar">
               <div className="sidebar">
                   <div className="top_section">
                       <h1 className="logo">
                           <img src={Logo} alt="" style={{width:'85px', height:'43px', margin:'0 30px 0 30px'}}/>
                       </h1>
                       {/* <div className="bars">
                           <FaBars/>
                       </div> */}
                   </div>

                   {
                       menuItem.map((item, index)=>(
                           <NavLink to={item.path} key = {index} className="link" activeclassName="active">
                               <div className="icon">{item.icon}</div>
                               <div className="link_text">{item.name}</div>
                           </NavLink>
                       ))
                   }
               </div>
               {children}
            </div> 
      
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
        /* <div className="sidebar">
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

            <Link to = "/community" style={{textDecoration: "none"}}>
            <li>
                    <MdGroups2 className='icon' />
                    <span>Community</span>
            </li>
            </Link>
                
                <li>
                    <BsShopWindow className = 'icon' />
                    <span>Store</span>
                </li>
            </ul>
          </div> 
       </div>  */
    )
}

export default Sidebar

