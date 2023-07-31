import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./community.css"

const Community = () => {
  return (
    <div className="community">
      <Sidebar/>
      <div className = "communityContainer">
      <Navbar/>
      </div>


    </div>
  )
}

export default Community
