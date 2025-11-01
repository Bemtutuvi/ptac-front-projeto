import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import "./Perfil.css";

function Perfil() {
  return (
    <div>
      <Header />
      <Sidebar/>
      <div className="cards">
      <div className="perfil-container">
        <form className="perfil-card">
          <div className="perfil-image">
          <img src='../../../images/Perfil.jpeg' className="perfil"/>
          </div>
          <h2>Perfil Usuarios</h2>
          <h3>Bernardo da Silva</h3>
          <h2>
            E-mail
            </h2>
            <h3>b*************@gmail.com</h3>
          <h2>
            Senha
            </h2>
            <h3>********</h3>

          <h2>
            Telefone
          </h2>
            <h3>+55 (67) 9982-5596</h3>

            <h2>
            Data de Nacimentos
            </h2>
            <h3>03/09/2000</h3>
        </form>
      </div>
      
      <div className="historicos-de-mesas">
        <form className="historico-card">
          <div className="mesa">
          <h2>Mesa 1</h2>
          <h3>Status: Livre</h3>
          <h3>Capacidade: 4</h3>
          <h3>Pátio: Pátio A</h3>
          </div>
          <div className="botao-mesa">
          <button>Editar</button>
          <br/>
          <button>Cancelar</button>
          <br/  >
          <button>Detalhes</button>
          </div>
        </form>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Perfil;
