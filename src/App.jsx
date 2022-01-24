import React from "react";
import "./App.css";
import ComFilhos from "./components/basics/ComFilhos";
import ComParametro from "./components/basics/ComParametro";
import Condicional from "./components/basics/Condicional";
import CondicionalComIf from "./components/basics/CondicionalComIf";
import Primeiro from "./components/basics/Primeiro";
import Repeticao from "./components/basics/Repeticao";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Card from "./components/layout/Card";
import Input from "./components/form/input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega"

export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React JS</h1>

            <div className="Cards">
                <Card titulo="#01 - Primeiro Componente" color="#8ecae6">
                    <Primeiro />
                </Card>

                <Card titulo="#02 - Componente com Parametro" color="#219ebc">
                    <ComParametro
                        titulo="Esse é o titulo"
                        subtitulo="Esse é o subtitulo"
                    />
                </Card>

                <Card titulo="#03 - Componente com Filhos" color="#023047">
                    <ComFilhos>
                        <ul>
                            <li>Ana</li>
                            <li>Bia</li>
                            <li>Carlos</li>
                            <li>Daniel</li>
                        </ul>
                    </ComFilhos>
                </Card>

                <Card titulo="#04 - Repeticao" color="#ffb703">
                    <Repeticao />
                </Card>

                <Card titulo="#05 - Condicional" color="#fb8500">
                    {/* inteiro */}
                    <Condicional numero={10} />
                </Card>

                <Card titulo="#06 - Condicional Com If" color="#1d3557">
                    {/* inteiro */}
                    <CondicionalComIf numero={15} />
                </Card>

                <Card titulo="#07 - Comunicação Direta" color="#2a9d8f">
                    {/* inteiro */}
                    <Pai sobrenome="Freitas" />
                </Card>

                <Card titulo="#08 - Comunicação Indireta">
                    {/* inteiro */}
                    <Super />
                </Card>

                <Card titulo="#09 - Input" color="#e63946">
                    {/* inteiro */}
                    <Input />
                </Card>

                <Card titulo="10 - Contador" color="#3a0ca3">
                    {/* inteiro */}
                    <Contador passo ={10} />
                </Card>
                
                <Card titulo="11 - Mega" color="#3a0ca3">
                    {/* inteiro */}
                    <Mega qtdNumeros={8}/>
                </Card>
            </div>
        </div>
    );
}
