import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Bolsistas from "./pages/bolsistas/Bolsistas";
import VisualizarUsuario from "./pages/visualizarUsuario/VisualizarUsuario";

export default function AppRoutes() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="bolsistas" element={<Bolsistas />}></Route>
        <Route path="usuario" element={<VisualizarUsuario />}></Route>
      </Routes>
    </BrowserRouter>
  )
}


