import Header from "../../../Header";
import Sidebar from "../../../Sidebar/Sidebar";
import Footer from "../../../Footer/index"
import "./Pizzagrande.css";

function Menu() {
const pizzas = [
    {
      nome: "Pizza Grande de Pepperoni",
      ingredientes: "Molho de Tomate, Mussarela, Pepperoni",
      adicionais: "Azeitona, Manjericão, Pimentão, Cheddar",
    },
    {
      nome: "Pizza Grande de Mussarela",
      ingredientes: "Molho de Tomate, Mussarela, Orégano",
      adicionais: "Azeitona, Manjericão",
    },
  ];

  return (
    <div className="main">
      <Header />
      <Sidebar />
    <div className="menu-container">
      <h1>Pizzas Grandes</h1>

      <div className="lista-pizzas">
        {menu.map((item, index) => (
          <div key={index} className="card-pizza">

            <div className="card-info">
              <h2>{item.nome}</h2>
              <p>{item.ingredientes}</p>
            </div>

            <div className="card-actions">
              <button className="btn-desc">Ingredientes</button>
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