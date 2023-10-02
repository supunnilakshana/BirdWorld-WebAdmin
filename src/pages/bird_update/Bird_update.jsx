import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import BirdUpdateform from '../../components/birdUpdate_form/Bupdate_form'
import "./bird_update.css"

const birds = () => {
    return (
        
        <div className="birdUpdate">
           
            <Sidebar/>

            
            
              
            <div className="birdupdate_Container">
                    <Navbar/>
        
                <div className="bUp_form">
                    <BirdUpdateform/>
                </div>

            </div>
        </div>

       
    )
}

export default birds
