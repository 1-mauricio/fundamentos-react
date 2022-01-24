import React from "react";
// INDIRETA O FILHO NÃO TEM REFERENCIA PRO PAI

export default function Sub(props) {
    return (
        <>
        <div>
            <button onClick={() => {
                props.onClicar(Math.random())}}>Alterar</button>
        </div>
        </>
    )
}