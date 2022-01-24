import React, { useState } from "react";
import Sub from "./Sub";

export default function Super(props) {
    const [num, setNum] = useState(0);

    function quandoClicar(valorGerado) {
        setNum(valorGerado);
    }

    return (
        <>
            <h4>Valor: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </>
    );
}
