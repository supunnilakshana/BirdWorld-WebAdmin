import React from 'react'
import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Datatable from '../../components/datatable/Datatable'

const List = () => {
    return (
        <div className="listpagecont">
          { <Sidebar/>}
         
            <div className="listContainer">
            { <Navbar/>}
                <Datatable/>
            </div>
           
        </div>
        
    )
}

export default List
