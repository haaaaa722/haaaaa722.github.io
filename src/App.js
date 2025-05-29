import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Develop from "./pages/Develop";
import Photos from "./pages/Photos";

const App = ()=>{
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Develop" element={<Develop/>}/>
        <Route path="/Photos" element={<Photos/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;