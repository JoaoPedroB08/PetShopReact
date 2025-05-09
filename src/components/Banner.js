import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Banner01 from '../imagens/Banner01.jpg'
import banner from '../imagens/banner.jpg'
import banhoeTosa from '../imagens/banho-tosa.jpg'

function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <img src={Banner01} alt='Primeiro banner'/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
            <img src={banner} alt='segundo banner'/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
            <img src={banhoeTosa} alt='Primeiro banner'/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner