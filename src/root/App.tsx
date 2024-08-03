import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import {getUserAgent } from "../helper/Utils";
import Layout from "../components/Layouts/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import LandingPage from "../pages/LandingPage/LandingPage";



const App = () => {

  const isMobileDevice = getUserAgent()

  return (
    <BrowserRouter>
      {
        isMobileDevice ?
          <Routes>
            <Route path="*" element={<LandingPage/>} />
          </Routes>
          :

          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<ProtectedRoute page={Home} layout={Layout} />} />
            <Route path="/home" element={<ProtectedRoute page={Home} layout={Layout} />} />
            <Route path="*" element={<NotFound/>} /> 
          </Routes>
      }

    </BrowserRouter>

  );
};

export default App;
