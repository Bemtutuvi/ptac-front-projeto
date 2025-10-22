import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";
import "./Atualizar_Perfil.css";

function Atualizar_Perfil() {
  return (
    <div>
      <Header />
      <div className="atualizar_Perfil-container">
        <form className="atualizar_Perfil-card" action="#" method="post">
          <h2>Atualizar Perfil Usuarios</h2>

          <label>
            Nome do Usuario
            <input name="nomeCliente" placeholder="Seu nome completo" />
          </label>

          <label>
            E-mail
            <input
              name="email"
              type="email"
              placeholder="gmail@dominio.com"
            />
          </label>
          <label>
            Senha
            <input
              name="senha"
              type="password"
              placeholder="Digite sua senha"
            />
          </label>
          <label>
            Nova Senha
            <input
              name="nova senha"
              type="password"
              placeholder="Digite sua senha"
            />
          </label>
          <label>
            Confirma Nova Senha
            <input
              name="confirma nova senha"
              type="password"
              placeholder="Digite sua senha"
            />
          </label>

          <label>
            Telefone
            <input name="telefone" placeholder="(00) 00000-0000" />
          </label>

          <label>
            Data de Nacimento
            <input name="dataReserva" type="date" />
          </label>
          <button type="submit" className="botao">
            Atualizar Usuario
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Atualizar_Perfil;
