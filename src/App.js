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
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:IDmovie" element={<Session />} />
        <Route path="/assentos/:IDsessao" element={<Seats />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
