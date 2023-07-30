import React from 'react'
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Birds from "./pages/birds/Birds"
import Community from "./pages/community/Community"

import {BrowserRouter, Routes, Route} from "react-router-dom"



 import "./app.css" 

function App() {

 

  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
         <Route path = "/">
           <Route index element ={<Home/>}/>
           <Route path = "/users">
             <Route index element = {<List/>}/>
           </Route>

           <Route path = "/birds">
             <Route index element = {<Birds/>}/>
           </Route>
         </Route>

          <Route path = "/community">
            <Route index element = {<Community/>}/>
          </Route>
          
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
