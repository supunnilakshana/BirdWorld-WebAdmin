import React from 'react'
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Birds from "./pages/birds_add/Add_Birds"
import Birds_list from "./pages/bird_list/Bird_list"
import Birds_update from "./pages/bird_update/Bird_update"
import Community from "./pages/community/Community"
import Login from "./pages/login/Login"
import Store from "./pages/store/Store"
import 'bootstrap/dist/css/bootstrap.min.css';

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

           <Route path = "/birds_list">
             <Route index element = {<Birds_list/>}/>
           </Route>

           <Route path = "/birds_update">
             <Route index element = {<Birds_update/>}/>
           </Route>
         

          <Route path = "/community">
            <Route index element = {<Community/>}/>
          </Route>
          <Route path = "/store">
            <Route index element = {<Store/>}/>
          </Route>
          <Route path = "/login">
            <Route index element = {<Login/>}/>
          </Route>
          
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
