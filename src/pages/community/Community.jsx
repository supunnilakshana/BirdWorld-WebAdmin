import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import "./community.css"

const Community = () => {
  return (
    <div className="community">
      <Sidebar/>
      <div className = "communityContainer">
      <Navbar/>
      <div className="com_post">
        <Posts/>
        <Posts/>
      </div>
      
      </div>

      
     
    </div>
  )
}

export default Community
