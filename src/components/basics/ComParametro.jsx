import React from "react"

export default function ComParametro (props) {
	//props é somente leitura
	// props.titulo = "outro titulo" -- erro
    return (
        
        <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
        </>
      
      )
}