import Sidebar from "../../../../Sidebar/Sidebar";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import "./Pizzamedio.css"

export default function CardapioPizzasGrande({ onAddToCart }) {
const pizzas = [
{
id: 1,
name: "Mussarela",
desc: "Molho de tomate, muçarela, orégano.",
price: 38.9,
img: "../../../../../../images/mussarela.jpg",
},
{
id: 2,
name: "Portuguesa",
desc: "Fatias de calabresa, mussarela, presunto, ovos cozidos, cebola, azeitona.",
price: 46.5,
img: "../../../../../../images/portuguesa.jpg",
},
];


return (
  <div>
    <Header/>
    <Sidebar/>
<div className="menu-contaixner">
  <div className="centraliza-titulo">
<h1 className="menu-title">Pizzas Médias</h1>
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