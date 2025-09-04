"use client"

import { useEffect, useState } from "react";

export default function Home() {
  
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProdutos(data));
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto) => {
          return <li key={produto.id}>{produto.id} - {produto.title}</li>
        })}
      </ul>
    </div>   
  );
}
