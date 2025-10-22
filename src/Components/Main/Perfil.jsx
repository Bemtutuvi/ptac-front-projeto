import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";
import "./Perfil.css";

function Perfil() {
  return (
    <div>
      <Header />
      <div className="perfil-container">
        <form className="perfil-card" action="#" method="post">
          <h2>Reserva de Mesas</h2>

          <label>
            Nome do Cliente
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
            Telefone
            <input name="telefone" placeholder="(00) 00000-0000" required />
          </label>

          <div className="grid-2">
            <label>
              Data da Reserva
              <input name="dataReserva" type="date" required />
            </label>

            <label>
              Horário
              <input name="horario" type="time" required />
            </label>
          </div>

          <label>
            Número de Pessoas
            <input
              name="qtdPessoas"
              type="number"
              placeholder="Ex: 4"
              min="1"
              required
            />
          </label>

          <label>
            <textarea
              name="observacoes"
              placeholder="Ex: mesa perto da janela, aniversário, etc."
              rows="3"
            />
          </label>

          <button type="submit" className="botao">
            Reservar Mesa
          </button>

          <p className="muted">
            Ao reservar, você concorda com nossa política de cancelamento.
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Perfil;
