import React from "react";
import Filho from "./Filho";

export default function Pai(props) {
    return (
        <>
            <h2>Filhos</h2>
            <Filho {...props}>Joao</Filho>
            <Filho sobrenome={props.sobrenome}>Maria</Filho>
            <Filho sobrenome="Silva">Pedro</Filho>
        </>
    )
}