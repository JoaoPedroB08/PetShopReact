import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';

function Cliente(props) {
    return (
      <Row>
        <Col lg="6" md="6" sm="12">
          <h2 className='titulo_cliente'>{ props.tituloCliente }</h2>
          <h4 className='txt_clientes'>{ props.textCliente }</h4>
        </Col>

        <Col>
          <img className='imagem_cliente' src={ props.imagemCliente } alt={ props.tituloCliente } />
        </Col>
      </Row>
      
    )
  }

export default Cliente;