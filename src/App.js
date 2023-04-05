import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import New from './pages/new/New'
import Single from './pages/single/Single'

import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";

import "./style/dark.scss"
import {useContext} from "react";
import {DarkModeContext} from "./context/darkModeContext"


/* import "./App.css" */

function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className= {darkMode ? "app dark" :"app"}>
      <BrowserRouter>
         <Routes>
          <Route path = "/">
            <Route index element = {<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="users">
              <Route index element = {<List/>} />
              <Route path=":userId" element = {<Single/>} />
              <Route path="new" element = {<New/>} />
            </Route>
          </Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App