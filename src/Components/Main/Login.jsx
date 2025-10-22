import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";
import "./Login.css";

function Login() {
  return (
    <div>
      <Header />
      <div className="login-container">
        <form className="login-card" action="#" method="post">
          <h2>Login Usuarios</h2>

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
          <button type="submit" className="botao">
            Cadastrar Usuario
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
