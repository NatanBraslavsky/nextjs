"use client";
import Link from "next/link";
import {useEffect, useState} from "react";

function Page() {
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProdutos(data));
    }, []);
    return (
        <div>
            <h1>Produtos</h1>
            <ul>
                {produtos.map((produto) => {
                    return (
                      <div key={produto.id}>
                        <Link href={`/produtos/${produto.id}`}>{produto.id}</Link>
                        <li >{produto.title}</li>
                      </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default Page;
