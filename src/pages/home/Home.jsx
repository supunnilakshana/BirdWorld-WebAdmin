import React from 'react'
/* import Featured from '../../components/featured/Featured' */
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widgets from '../../components/widgets/Widgets'
import './home.scss'

const Home = () => {
    return (
        <div className = "home">
           <Sidebar/>

           <div className="homeContainer">
           <Navbar/>
            <div className="widgets">
                <Widgets type="users" />
                <Widgets type="active" />
                <Widgets type="order" />
                
            </div>

           {/*  <div className="featured">
            <Featured/>
            </div> */}
               
           </div>
        </div>
    )
}

export default Home
