import React from 'react'
import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Datatable from '../../components/datatable/Datatable'

const List = () => {
    return (
        <div className="listpagecont">
            <div className="listside">
            <Sidebar/>
            </div>
          
         
            <div className="listContainer">
            { <Navbar/>}
                <div className="dtable">
                <Datatable/>
                </div>
                
            </div>
           
        </div>
        
    )
}

export default List
