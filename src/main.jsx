  import React from "react";
  import ReactDOM from "react-dom/client";
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import App from "./App.jsx";
  import Editar from "./Components/main/Atualizar_Perfil/Atualizar_Perfil.jsx";
  import Perfil from "./Components/main/Perfil/Perfil.jsx";
  import Cadastrar from "./Components/Main/Cadastrar/Cadastrar.jsx";
  import Cadastrar_Mesa from "./Components/main/Cadastrar_Mesa/Cadastrar_Mesa.jsx";
  import Consultar_mesa from "./Components/main/consultar/consultar.jsx";
  import Cardapio from "./Components/main/Cardapio/Cardapio.jsx";
  import Reserva from "./Components/main/Reserva/Reserva_mesa.jsx";  
  import Login from "./Components/main/Login/Login.jsx"

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/editar" element={<Editar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/cadastrar_mesa" element={<Cadastrar_Mesa />} />
          <Route path="/consultar_mesa" element={<Consultar_mesa />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/reserva_de_mesa" element={<Reserva />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );