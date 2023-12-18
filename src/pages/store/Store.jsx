import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './store.css'



const Store = () => {
  return (
    <div className="store">
        <div className="stoside">
        <Sidebar/>
        </div>

        <div className="storeContainer">
        <Navbar/>
        </div>
    </div>
  )
}

export default Store
