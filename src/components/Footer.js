import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(props) {
  return (
    <Container>
      <Row>

        <h1 className='tituloFooter'>Título</h1>

        <Col className='formularioCol'>

            <div className='forms'>
            <input type='text' id='nomeInput' value={ props.nomeInput } placeholder='Nome...' />
            <input type='text' id='nomeInput' value={ props.nomeInput } placeholder='email...' />
            <input type='text' id='nomeInput' className='mensagemForms' value={ props.nomeInput } placeholder='Mensagem...' />
            </div>

            <button id='enviarButton' className='botaoAgora'>Enviar agora!</button>
        </Col>

        <Col>
            <h3>w</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;