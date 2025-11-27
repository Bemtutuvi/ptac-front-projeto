import './Sidebar.css';
const Sidebar = () => {
  return (
    <div className="sidebar">
    <img src='../../../images/logo.png'/>
    <div className="logo">  
    </div>
    <a href="/cadastrar_mesa">Cadastrar mesa</a>
    <a href="/reserva_de_mesa">Reservar</a>
    <a href="/consultar_mesa">Consultar</a>
    <a href="/cardapio">Cardápio</a>
</div>


)
};

export default Sidebar;
