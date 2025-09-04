"use client"

import { useEffect, useState } from "react";


function Page({ params }) {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(response => response.json())
        .then(data => setProduto(data));
  }, []);

  return (
    <div>
      {params.id} - {produto? produto.title : "Carregando"}
    </div>
  )
}

export default Page