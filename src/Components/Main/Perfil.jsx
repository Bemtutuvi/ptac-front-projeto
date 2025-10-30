import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";
import "./Perfil.css";

function Perfil() {
  return (
    <div>
      <Header />
      <div className="mesas">
        <a href="/cadastrar_mesas">Cadastrar messas</a>
        <br/>
        <a href="/consultar_messas">Consultar messas</a>
        <br/>
        <a href="/reservar_mesas">Reservar messas</a>     
        <br/>
      </div>
      <Footer />
    </div>
  );
}

export default Perfil;
