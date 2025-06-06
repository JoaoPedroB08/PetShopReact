import React from 'react';
// Não vamos mais usar Row e Col aqui para simplificar
import { Container } from 'react-bootstrap';

function ContentPhotos(props) {
  return (
    // O Container ainda é útil para dar margens laterais à página inteira
    <Container>
      {/* Bloco de Texto Centralizado */}
      <div className='text_block_centered'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit, mollitia, cupiditate quod qui reiciendis alias doloribus aliquid laboriosam tenetur expedita, vero a obcaecati velit explicabo laudantium beatae impedit est!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi excepturi nam, dolorum ipsam, deserunt nulla necessitatibus provident consequatur perspiciatis numquam, minima aliquam reiciendis voluptatibus eligendi blanditiis velit tempore repellendus harum.</p>
      </div>

      {/* Galeria de Imagens com Tamanho Padrão */}
      <div className='gallery_wrapper'>
        <img className='gallery_img_standard' src={ props.img1 } alt="Foto de adestramento 1" />
        <img className='gallery_img_standard' src={ props.img2 } alt="Foto de adestramento 2" />
        <img className='gallery_img_standard' src={ props.img3 } alt="Foto de adestramento 3" />
        <img className='gallery_img_standard' src={ props.img4 } alt="Foto de adestramento 4" />
        <img className='gallery_img_standard' src={ props.img5 } alt="Foto de adestramento 5" />
      </div>
    </Container>
  );
}

export default ContentPhotos;