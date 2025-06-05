import React from 'react'

function TituloSecao(props) {
  return (
    <div className='tituloSection' >
      <h1>{ props.textTitulo }</h1>
    </div>
  )
}

export default TituloSecao;