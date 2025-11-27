import Header from "../../Header";
import Sidebar from "../../Sidebar/Sidebar";
import Footer from "../../Footer/index"
import "./Cardapio.css";

export default function Cardapio() {
  const pizzas = [
    {
      nome: "Pizza Grande",
      descricao: "8 fatias • até dois sabores",
      preco: "63,00",
      imagem: "../../../images/pizza-grande.png",
    },
    {
      nome: "Pizza Média",
      descricao: "6 fatias • até dois sabores",
      preco: "58,00",
      imagem: "../../../images/pizza-media.png",
    },
    {
      nome: "Pizza Brotinho",
      descricao: "4 fatias",
      preco: "52,00",
      imagem: "../../../images/pizza-brotinho.png",
    },
  ];

  return (
    <div className="main">
      <Header />
      <Sidebar />
    <div className="cardapio-container">
      <h1>Pizzas</h1>
      <img src="../../../images/pizza_tamanho.png" alt="Tamanhos de Pizza" className="tamanhos-imagem" />

      <div className="lista-pizzas">
        {pizzas.map((item, index) => (
          <div key={index} className="card-pizza">
            <img src={item.imagem} alt={item.nome} />

            <div className="card-info">
              <h2>{item.nome}</h2>
              <p>{item.descricao}</p>
            </div>

            <div className="card-actions">
              <p className="label">A partir de</p>
              <p className="preco">R$ {item.preco}</p>
              <button className="btn-add">Adicionar ao Carrinho</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
        </div>
  );
}
