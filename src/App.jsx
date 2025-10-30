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
      <h1>Pizzaria Florenza</h1>
      <h2>Adiante seu atendimento, reserve sua mesa online!</h2>
    </div>
    <Footer />
   </div>
)}

export default App;
