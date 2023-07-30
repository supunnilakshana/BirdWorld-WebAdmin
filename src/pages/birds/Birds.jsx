import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Birdform from '../../components/bird_form/Birdform'
import "./birds.css"

const birds = () => {
    return (
        
        <div className="birds">
           
            <Sidebar/>

            
            
              
            <div className="birdContainer">
                    <Navbar/>
        
                <div className="b_form">
                    <Birdform/>
                </div>

            </div>
        </div>

       
    )
}

export default birds
