import Header from "../../Header/index.jsx";
import Footer from "../../Footer/index.jsx";
import Sidebar from "../../Sidebar/Sidebar.jsx";
import "./Cadastrar_Mesa.css";
import { useState } from "react";

function Cadastrar_Mesa() {
  const [mesas, setMesas] = useState([]);

  function salvarMesa(e) {
    e.preventDefault();

    const form = e.target;
    const novaMesa = {
      numero: form.numeroMesa.value,
      capacidade: form.Capacidade.value,
      status: form.statusMesa.value,
      infantil: form.infantil.value,
    };

    setMesas([...mesas, novaMesa]);
    form.reset();
  }

  return (
    <div>
      <Header />
      <Sidebar />

      <div className="cadastro-container">
        <form className="cadastro-card" onSubmit={salvarMesa}>
          <h2>Cadastrar Mesa</h2>

          <label>
            Número da Mesa
            <input name="numeroMesa" required />
          </label>

          <label>
            Capacidade de pessoas
            <input name="Capacidade" required />
          </label>

          <label>
            Status da mesa
            <select name="statusMesa" required>
              <option value="">Selecione...</option>
              <option value="Livre">Livre</option>
              <option value="Ocupado">Ocupado</option>
              <option value="Reservado">Reservado</option>
            </select>
          </label>

          <label>
            Possui assento infantil?
            <select name="infantil" required>
              <option value="">Selecione...</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </label>

          <button type="submit" className="botao">
            Salvar
          </button>
        </form>

        {/* Só aparece se houver mesas cadastradas */}
        {mesas.length > 0 && (
          <>
            <h2 style={{ color: "black" }}>Mesas Cadastradas</h2>

            <div className="lista-mesas">
              {mesas.map((m, index) => (
                <div className="mesa-card" key={index}>
                  <p><strong>Mesa:</strong> {m.numero}</p>
                  <p><strong>Capacidade:</strong> {m.capacidade} pessoas</p>
                  <p><strong>Status:</strong> {m.status}</p>
                  <p><strong>Assento infantil:</strong> {m.infantil}</p>

                  <button className="editar-btn">Editar</button>
                  <button className="excluir-btn">Excluir</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Cadastrar_Mesa;
