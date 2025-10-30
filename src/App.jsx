import Header from './Components/Header/index.jsx';
import Footer from './Components/Footer/index.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import './App.css';
function App() {
  return(
  <div>
    <Header />
    <div>
    <Sidebar />
    </div>
    <div class="conteudo">
<section className="hero elegant-hero">
<div className="overlay" />
<div className="hero-content">
<h2>Bem-vindo à experiência Florenza</h2>
<p>
Onde a tradição italiana encontra elegância e sabor. Um ambiente
acolhedor, ingredientes selecionados e pizzas artesanais feitas com
paixão.
</p>
</div>
</section>


<section className="section-info">
<div>
<h3>Horário de Funcionamento</h3>
<p>Segunda a Domingo — 18h às 23h</p>
</div>


<div>
<h3>Endereço</h3>
<p>Rua dos Sabores, 112 — Centro, São Paulo</p>
</div>


<div>
<h3>Contato</h3>
<p>(11) 99999‑9999</p>
</div>
</section>
</div>
    <Footer />
   </div>
)}

export default App;
