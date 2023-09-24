import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import {
  AuthContext,
  AuthContextProvider,
} from "./context/authContext/AuthContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            {/* Redirect to /home when signed in */}
            {user && <Route path="/" element={<Navigate to="/home" />} />}

            <Route
              path="/"
              element={
                !user ? (
                  <Login />
                ) : (
                  <>
                    <Route index element={<Home />} />
                    <Route path="users">
                      <Route index element={<List />} />
                      <Route path=":userId" element={<Single />} />
                      <Route path="new" element={<New />} />
                    </Route>
                  </>
                )
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
