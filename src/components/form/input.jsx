import React, { useState } from "react";
//Controlled Components

export default function Input(props) {
    // useState = valor, funcao que altera valor
    const [nome, alterarNome] = useState('Mauricio')
    return (
        <>
            <h3>{nome}</h3>
            <input type="text" value={nome} onChange={e => alterarNome(e.target.value)}></input>
        </>
    );
}
