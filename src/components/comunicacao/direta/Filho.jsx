import React from "react";
// DIRETA O FILHO TEM REFERENCIA PRO PAI


export default function Filho (props) {
    return (
        <>
            <h4>{props.children} {props.sobrenome}</h4>
        </>
    )
}