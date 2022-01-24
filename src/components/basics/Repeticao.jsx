import React from "react";
import produtos from "../../data/products";

export default function Repeticao(props) {
    function getProdutosListItem() {
        return produtos.map((prod) => {
            return (
                <li key={prod.id}>
                    {prod.id} - {prod.nome} - R$ {prod.preco}
                </li>
            );
        });
    }

    return (
        <div>
            <h2>Repeticao</h2>
            <ul>{getProdutosListItem()}</ul>
        </div>
    );
}
