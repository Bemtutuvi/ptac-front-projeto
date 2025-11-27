import "./Reserva_mesa.css";
import Header from "../../Header";
import Sidebar from "../../Sidebar/Sidebar";
import Footer from "../../Footer";

export default function ReservarMesa() {
  return (
    <div>
      <Header />
      <Sidebar />
    <div className="container">
      <h1>Reservar Mesa</h1>

      <form className="form-reserva" autoComplete="off">
        <div className="campo">
          <label>Nome</label>
          <input type="text" name="nome" required placeholder="Seu nome" />
        </div>

        <div className="campo">
          <label>Telefone</label>
          <input type="tel" name="telefone" required placeholder="(99) 99999-9999" />
        </div>

        <div className="campo">
          <label>E-mail</label>
          <input type="email" name="email" placeholder="endereço@exemplo.com" />
        </div>

        <div className="campo">
          <label>Número de pessoas</label>
          <input type="number" name="pessoas" min="1" max="20" required />
        </div>

        <div className="campo">
          <label>Número da mesa</label>
          <input type="number" name="numero da mesa" min="1" max="20" required />
        </div>

        <div className="campo">
          <label>Data</label>
          <input type="date" name="data" required />
        </div>

        <div className="campo">
          <label>Hora</label>
          <input type="time" name="hora" required />
        </div>

        <div className="campo full">
          <label>Observações</label>
          <textarea name="observacoes" placeholder="Ex.: área externa, aniversário..."></textarea>
        </div>

        <button className="botao" type="submit">Reservar</button>
      </form>
    </div>
      <Footer />
    </div>
  );
}
