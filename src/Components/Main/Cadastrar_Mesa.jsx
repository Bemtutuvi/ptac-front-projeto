import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";
import "./Cadastrar_Mesas.css";

function Cadastrar_Mesas() {
  return (
    <div>
      <Header />
      <div className="cadastro-container">
        <form className="cadastro-card" action="#" method="post">
          <h2>Cadastrar Mesa</h2>

          <label>
            Número da Mesa
            <input name="numeroMesa" required />
          </label>

          <label>
            Capacidade de pessoas
            <input name="capacidade" required />
          </label>

          <label>
            Status da mesa
            <input name="statusMesa" required />
          </label>

          <label>
            Possui assento infantil?
            <input name="assentoInfantil" required />
          </label>

          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            <button type="submit" className="botao">
              Salvar
            </button>
            <button type="button" className="botao">
              Editar
            </button>
            <button type="button" className="botao">
              Excluir
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Cadastrar_Mesas;
