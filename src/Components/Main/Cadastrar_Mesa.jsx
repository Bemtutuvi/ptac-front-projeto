import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";
import "./Cadastrar_Mesa.css";

function Cadastrar_Mesa() {
  return (
    <div>
      <Header />
      <div className="cadastro-container">
        <form className="cadastro-card" action="#" method="post">
          <h2>Cadastrar Mesa</h2>

          <label>
            Número da Mesa
            <input
              name="numeroMesa" required
            />
          </label>

          <label>
            Capacidade de pessoas
            <input
              name="Capacidade"
              required
            />
          </label>
          <label>
            Status da mesa
            <input
              name="statusMesa"
              required
            />
          </label>

          <label>
            Possui assento infantil?
            <input name="telefone" required />
          </label>

          <button type="submit" className="botao">
            Salvar
          </button>
          <button type="submit" className="botao">
            Editar
          </button>
          <button type="submit" className="botao">
            Excluir
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Cadastrar_Mesa;
