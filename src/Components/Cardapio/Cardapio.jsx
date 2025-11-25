import React from "react";

export default function Cardapio() {
  const pizzas = [
    {
      nome: "Pizza Grande",
      descricao: "8 fatias • até dois sabores",
      preco: "63,00",
      imagem: "img/pizza-grande.jpg",
    },
    {
      nome: "Pizza Média",
      descricao: "6 fatias • até dois sabores",
      preco: "58,00",
      imagem: "img/pizza-media.jpg",
    },
    {
      nome: "Pizza Brotinho",
      descricao: "4 fatias",
      preco: "52,00",
      imagem: "img/pizza-brotinho.jpg",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-neutral-900 text-white p-6 flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Pizzas</h1>

      <div className="flex flex-col gap-6">
        {pizzas.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-2xl shadow-lg p-4 flex gap-4 items-center"
          >
            <img
              src={item.imagem}
              alt={item.nome}
              className="w-32 h-32 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h2 className="text-xl font-semibold">{item.nome}</h2>
              <p className="text-sm opacity-80">{item.descricao}</p>
            </div>

            <div className="text-right flex flex-col gap-2">
              <p className="text-sm opacity-70">A partir de</p>
              <p className="text-lg font-bold">R$ {item.preco}</p>
              <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
