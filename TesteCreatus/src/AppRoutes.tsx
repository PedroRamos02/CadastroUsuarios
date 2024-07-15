import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bolsistas from "./pages/bolsistas/Bolsistas";
import { Login } from "./pages/login/Login";
import { VisualizarUsuario } from "./pages/visualizarUsuario/VisualizarUsuario";
import React from "react";

export const AppRoutes: React.FC = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="bolsistas" element={<Bolsistas />}></Route>
        <Route path="/user/:id" element={<VisualizarUsuario />}></Route>
      </Routes>
    </BrowserRouter>
  )
}


