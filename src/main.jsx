  import React from "react";
  import ReactDOM from "react-dom/client";
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import App from "./App.jsx";
  import Editar from "./Components/Main/Atualizar_Perfil.jsx";
  import Perfil from "./Components/Main/Perfil.jsx";
  import Cadastrar from "./Components/Main/Cadastrar.jsx";
  import Consultar_mesas from "./Components/consultar/consultar.jsx";
  import Login from "./Components/Main/Login.jsx";

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/editar" element={<Editar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
<<<<<<< Updated upstream
          <Route path="/cadastrar_mesa" element={<Cadastrar_Mesa />} />
=======
          <Route path="/consultar_mesas" element={<Consultar_mesas />} />
>>>>>>> Stashed changes
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );