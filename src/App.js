import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Seats } from "./pages/Seats";
import { Session } from "./pages/Session";
import { Success } from "./pages/Success";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

      {/* 
      <Home/> 
      <Session/> 
      <Seats/>
      <Success/>
    */}
    
    </BrowserRouter>
    
  );
}

export default App;
