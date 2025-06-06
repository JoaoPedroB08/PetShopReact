import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

function FAQ() {
  return (
    <div className='faq_wrapper'>
      <Container>
        <h2 className='faq_title'>Perguntas Frequentes</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Qual a melhor idade para adestramento?</Accordion.Header>
            <Accordion.Body>
              Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Toda raça pode ser adestrada?</Accordion.Header>
            <Accordion.Body>
              Sim, toda raça pode ser adestrada. A chave é a paciência e a consistência do tutor.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Quanto tempo leva para o cachorro estar preparado?</Accordion.Header>
            <Accordion.Body>
              O tempo de treinamento varia de acordo com o cão e os objetivos. Comandos básicos podem ser aprendidos em algumas semanas.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}

export default FAQ;