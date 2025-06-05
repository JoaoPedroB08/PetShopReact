import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-wrapper">
      <Container>
        <Row>
          <h5 className='tituloFooter'>Fale Conosco</h5>
          <Col md={7} className='formularioCol'>
            <form className='forms'>
              <input type='text' placeholder='Nome' />
              <input type='email' placeholder='E-mail' />
              <textarea className='mensagemForms' placeholder='Mensagem'></textarea>
            </form>
            <div className="button-wrapper">
              <button id='enviarButton' className='botaoAgora'>Enviar Agora</button>
            </div>
          </Col>

          <Col md={5} className="contact-info-col">
            <div className="contact-details">
              <p><FaPhone /> (48) 3222 0098</p>
              <p><FaWhatsapp /> (48) 99383 0928</p>
              <p><FaMapMarkerAlt /> Rua Marechal Deodoro, 55 - Centro - Florianópolis/SC</p>
            </div>
            <div className="social-icons">
              <a href="#!" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#!" aria-label="Instagram"><FaInstagram /></a>
              <a href="#!" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;