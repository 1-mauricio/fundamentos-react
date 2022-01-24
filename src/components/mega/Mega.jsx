import React, {useState} from "react";

export default function Mega(props) {
    const [numeros, setNumeros] = useState(Array(props.qtdNumeros).fill(0))

    function gerarNumerosNaoContidos(array) {
        const min = 1
        const max = 60
        const novoNum = parseInt(Math.random() * (max - min)) + min

        return array.includes(novoNum) ? gerarNumerosNaoContidos(array) : novoNum
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdNumeros)
            .fill(0)
            .reduce(a => [...a, gerarNumerosNaoContidos(a)], [])
            .sort((a, b) => a - b)
        setNumeros(novoArray)
    }
    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Número</button>
        </>
    )
}