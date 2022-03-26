import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Seats } from "./pages/Seats";
import { Session } from "./pages/Session";
import { Success } from "./pages/Success";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sessions/:IDmovie" element={<Session/>}/>
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
