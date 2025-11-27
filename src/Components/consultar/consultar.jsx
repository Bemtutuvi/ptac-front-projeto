import React, { useState } from "react";
import Header from "../Header/index.jsx";
import Sidebar from "../sidebar/sidebar";
import Footer from "../Footer/index.jsx";
import "./ConsultaR.css";

const ConsultaMesas = () => {
  const [statusFiltro, setStatusFiltro] = useState("");
  const [codigoPatio, setCodigoPatio] = useState("");

  const mesas = [
    { numero: 1, status: "Livre", capacidade: 4, patio: "Pátio A" },
    { numero: 2, status: "Ocupada", capacidade: 2, patio: "Pátio B" },
    { numero: 3, status: "Reservada", capacidade: 6, patio: "Pátio A" },
  ];

  const mesasFiltradas = mesas.filter((mesa) => {
    const filtroStatus = statusFiltro ? mesa.status === statusFiltro : true;
    const filtroPatio = codigoPatio ? mesa.patio.includes(codigoPatio) : true;
    return filtroStatus && filtroPatio;
  });

  return (
    <div>
    <Header />
    <Sidebar />
    <div className="consulta-container">
      <div className="filtros-container">
        <h2 className="subtitulo">Filtros</h2>
        <div className="filtros-grid">
            <label>Status da mesa</label>
            <select            >
              <option>Selecione</option>
              <option>Livre</option>
              <option>Ocupada</option>
              <option>Reservada</option>
            </select>
              <br/>
              <br/>
            <label>Cadira infantil</label>
            <select            >
              <option>Selecione</option>
              <option>sim</option>
              <option>não</option>
            </select>
              <br/>
              <br/>
          <div className="campo">
            <label>Numero da mesa</label>
            <input />
            <br/>
          </div>
          <br />
          <div className="campo">
            <label>Capacidade da mesa</label>
            <input />
          </div>
        </div>
        <br />
        <div className="acoes">
          <button>filtrar</button>
        </div>
      </div>

      <div className="cards-container">
        <h1 className="titulo-principal">Consulta de Mesas</h1>
        <h2 className="subtitulo">Mesas</h2>
        <div className="cards">
          { (
            mesasFiltradas.map((mesa) => (
              <div key={mesa.numero} className="card">
                <h3>Mesa {mesa.numero}</h3>
                <p>Status: {mesa.status}</p>
                <p>Capacidade: {mesa.capacidade}</p>
                <p>Pátio: {mesa.patio}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ConsultaMesas;
