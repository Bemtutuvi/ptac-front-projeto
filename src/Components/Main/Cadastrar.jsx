import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";
import "./Cadastrar.css";

function Cadastrar() {
  return (
    <div>
      <Header />
      <div className="cadastro-container">
        <form className="cadastro-card" action="#" method="post">
          <h2>Cadastrar Usuarios</h2>

          <label>
            Nome do Usuario
            <input
              name="nomeCliente"
              placeholder="Seu nome completo"
              required
            />
          </label>

          <label>
            E-mail
            <input
              name="email"
              type="email"
              placeholder="exemplo@dominio.com"
              required
            />
          </label>
          <label>
            Senha
            <input
              name="senha"
              type="password"
              placeholder="Digite sua senha"
              required
            />
          </label>

          <label>
            Telefone
            <input name="telefone" placeholder="(00) 00000-0000" required />
          </label>

          <div className="grid-2">
            <label>
              Data de Nacimento
              <input name="dataReserva" type="date" required />
            </label>
          </div>
          <button type="submit" className="botao">
            Cadastrar Usuario
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Cadastrar;
