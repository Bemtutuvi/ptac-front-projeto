import Sidebar from "../../../../Sidebar/Sidebar";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import "./Pizzabrotinho.css"

export default function CardapioPizzasGrande({ onAddToCart }) {
const pizzas = [
{
id: 1,
name: "Frango com Catupiry",
desc: "Frango, Catupity, mussarela, cebola, alho, azeitona, orégano.",
price: 23.5,
img: "../../../../../../images/frangocat.jpg",
},
{
id: 2,
name: "Napolitana",
desc: "Tomate, mussarela, azeite de oliva, manjericão.",
price: 26.5,
img: "../../../../../../images/napolitana.jpg",
},
];


return (
  <div>
    <Header/>
    <Sidebar/>
<div className="menu-contaixner">
  <div className="centraliza-titulo">
<h1 className="menu-title">Pizzas Brotinho</h1>
  </div>


<div className="pizza-grid">
{pizzas.map((p) => (
  <div key={p.id} className="pizza-card">
<img src={p.img} alt={p.name} className="pizza-img" />


<h2 className="pizza-name">{p.name}</h2>
<p className="pizza-desc">{p.desc}</p>


<div className="pizza-footer">
<span className="pizza-price">R$ {p.price.toFixed(2)}</span>


<button onClick={() => handleAdd(p)} className="btn-add">
Adicionar
</button>
</div>
</div>
))}
</div>
</div>
<Footer />
</div>
);
}